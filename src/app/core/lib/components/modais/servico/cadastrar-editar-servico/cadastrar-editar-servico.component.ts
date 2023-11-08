import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessagesSnackBar } from 'src/app/core/constants/messagesSnackBar';
import { Servico } from 'src/app/core/model/servicos';
import { ServicoService } from 'src/app/core/services/servico/servico.service';

@Component({
  selector: 'vex-cadastrar-editar-servico',
  templateUrl: './cadastrar-editar-servico.component.html',
  styleUrls: ['./cadastrar-editar-servico.component.scss']
})
export class CadastrarEditarServicoComponent {

  load: boolean = false;
  form: FormGroup;
  legendaBotao: string = '';
  isCadastro!: boolean;
  servico = new Servico();
  mostraIcone: boolean = true;
  estabelecimentoID = window.localStorage.getItem('estabelecimento_ID');

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private servicoService: ServicoService,
    private readonly dialogRef: MatDialogRef<CadastrarEditarServicoComponent>,
    private readonly fb: FormBuilder,
    private snackbar: MatSnackBar
  ) {
    this.isCadastro = !data.servico;
    this.legendaBotao = this.isCadastro ? "Adicionar" : "Confirmar";
    this.form = this.fb.group({
      nome: [data?.servico?.nome, [Validators.required]],
      tempoEstimado: [data?.servico?.tempoEstimado, [Validators.required, Validators.pattern("^[0-9]*$")]],
      descricao: [data?.servico?.descricao],
      categoria: [data?.servico?.categoria, [Validators.required]],
      valor: [data?.servico?.valor, [Validators.required, Validators.pattern("^[0-9]*$")]],
      valorPromocional: [data?.servico?.valorPromocional, [Validators.required, Validators.pattern("^[0-9]*$")]],
      promocional: [data?.servico?.promocional]
    });
  }

  cadastrarEditarServico() {
    this.isCadastro ? this.cadastrarServico() : this.editarServico()
  }

  cadastrarServico() {
    if (this.form.invalid) {
      this.snackbar.open(
        MessagesSnackBar.ERRO_VALIDACAO,
        "Fechar",
        { duration: 3850 });
      return;
    }
    this.load = true;
    this.servico = this.form.value;
    this.servico.estabelecimentoID = +this.estabelecimentoID;
    this.servicoService.cadastrarServico(this.servico).subscribe(() => {
      this.load = false;
      this.dialogRef.close(true)
      this.snackbar.open(
        MessagesSnackBar.ADICIONAR_SERVICO,
        "Fechar",
        {
          duration: 3000
        }
      );
    },
      (error) => {
        this.load = false;
        console.log(error);
        this.snackbar.open(
          MessagesSnackBar.ERRO_ADICIONAR_SERVICO,
          "Tente novamente",
          {
            duration: 3000
          }
        );

      })
  }

  editarServico() {
    if (this.form.invalid) {
      this.snackbar.open(
        MessagesSnackBar.ERRO_VALIDACAO,
        "Fechar",
        { duration: 3850 });
      return;
    }
    this.load = true;
    this.montarBody();
    this.servicoService.editarServico(this.servico).subscribe(() => {
      this.load = false;
      this.dialogRef.close(true);
      this.snackbar.open(
        MessagesSnackBar.EDITAR_SERVICO,
        "Fechar",
        {
          duration: 3000
        }
      );
    }, (error) => {
      this.load = false;
      console.log(error)
      this.snackbar.open(
        MessagesSnackBar.ERRO_EDITAR_SERVICO,
        "Tenta novamente",
        {
          duration: 3000
        }
      );

    });
  }

  capturarImagem(event: Event, inputType: string) {
    const inputElement = event.target as HTMLInputElement;
    const selectedFile = inputElement.files[0];

    if (selectedFile) {
      console.log(`${inputType} selecionada:`, selectedFile);
    }
  }

  private montarBody() {
    let id = this.data?.servico?.id;
    let estabelecimentoID = this.data?.servico?.estabelecimentoID;
    this.servico = this.form.value;
    this.servico.id = id;
    this.servico.estabelecimentoID = estabelecimentoID;
  }
}
