import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessagesSnackBar } from 'src/app/core/constants/messagesSnackBar';
import { Servico } from 'src/app/core/model/servicos';
import { CommomService } from 'src/app/core/services/commom/commom.service';
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
  isCadastro!: boolean ;

  servico = new Servico();

  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: any,
      private fb: FormBuilder, private servicoService: ServicoService,
      private readonly dialogRef: MatDialogRef<CadastrarEditarServicoComponent>,
      private commomService: CommomService,
      private snackbar: MatSnackBar) {
        this.montaLegendaBotao(data);
        this.iniciaForm(data);
  }

  private montaLegendaBotao(data: any) {
    this.isCadastro = !data.servico;
    this.legendaBotao = this.isCadastro ? "Adicionar" : "Confirmar";
  }

  private iniciaForm(data: any) {
    this.form = this.fb.group({
      nome: [data?.servico?.nome, Validators.required],
      tempoEstimado: [data?.servico?.tempoEstimado, Validators.required],
      descricao: [data?.servico?.descricao],
      categoria: [data?.servico?.categoria, Validators.required],
      valor: [data?.servico?.valor, Validators.required],
      valorPromocional: [data?.servico?.valorPromocional, Validators.required],
      promocional: [data?.servico?.promocional]
    });
  }

  cadastrarEditarServico() {
    this.isCadastro?this.cadastrarServico() : this.editarServico()
  }

  cadastrarServico() {
    this.load = true;
    this.montarBody();
    this.servicoService.cadastrarServico(this.servico).subscribe(() => {
      console.log(this.form.value);
      this.load = false;
      this.dialogRef.close(true)
      this.snackbar.open(
        MessagesSnackBar.ADICIONAR_SERVICO,
        "Fechar",
        {
          duration: 10000
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
            duration: 10000
          }
        );

      })
  }

    editarServico() {
      this.montarBody();
      this.servicoService.editarServico(this.servico).subscribe(() => {
        console.log(this.form.value)
        this.dialogRef.close(true);
        this.snackbar.open(
          MessagesSnackBar.EDITAR_SERVICO,
          "Fechar",
          {
            duration: 10000
          }
        );
      }, (error) => {
        console.log(error)
        this.snackbar.open(
          MessagesSnackBar.ERRO_EDITAR_SERVICO,
          "Tenta novamente",
          {
            duration: 10000
          }
        );

      });
    }

  private montarBody() {
    let id = this.data?.servico?.id;
    let estabelecimentoID = this.commomService.estabelecimentoId
    this.servico = this.form.value;
    this.servico.id = id;
    this.servico.estabelecimentoID = estabelecimentoID;
  }
}
