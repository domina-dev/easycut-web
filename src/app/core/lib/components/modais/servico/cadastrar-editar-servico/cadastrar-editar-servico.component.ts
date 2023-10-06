import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Servico } from 'src/app/core/model/servicos';
import { ServicoService } from 'src/app/core/services/servico/servico.service';

@Component({
    selector: 'vex-cadastrar-editar-servico',
    templateUrl: './cadastrar-editar-servico.component.html',
    styleUrls: ['./cadastrar-editar-servico.component.scss']
})
export class CadastrarEditarServicoComponent {
    form: FormGroup;
    legendaBotao: string = '';
    isCadastro!: boolean ;

<<<<<<< HEAD
    servico = new Servico();

=======
>>>>>>> 1e5d26790dd28aac5ba370c9f8d7fe591b879d8d
    constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder, private servicoService: ServicoService,
        private readonly dialogRef: MatDialogRef<CadastrarEditarServicoComponent>,
        private snackbar: MatSnackBar) {
<<<<<<< HEAD
          this.isCadastro = data.servico? false : true;
          this.legendaBotao = this.isCadastro?"Adicionar" : "Confirmar";
          this.form = this.fb.group({
            nome: [data?.servico?.nome, Validators.required],
            tempo: [data?.servico?.tempoEstimado, Validators.required],
            descricao: [data?.servico?.descricao],
            categoria: [data?.servico?.categoria, Validators.required],
            valor: [data?.servico?.valor, Validators.required],
            valorPromocional: [data?.servico?.valorPromocional, Validators.required]
=======
        this.form = this.fb.group({
            nome: [data?.servico?.nome, Validators.required],
            tempo: [data?.servico?.tempoEstimado, Validators.required],
            categoria: [data?.servico?.categoria.value, Validators.required],
            valor: [data?.servico?.valor, Validators.required]
>>>>>>> 1e5d26790dd28aac5ba370c9f8d7fe591b879d8d
        });
    }

    cadastrarEditarServico() {
      this.isCadastro?this.cadastrarServico() : this.editarServico()
    }

    cadastrarServico() {
        this.montarBody();
        this.servicoService.cadastrarServico(this.servico).subscribe(() => {
            console.log(this.form.value);
            this.dialogRef.close(true)
            this.snackbar.open(
                "Cadastro feito com sucesso.",
                "Fechar",
                {
                    duration: 10000
                }
            );
        },
            (error) => {
                console.log(error);
                this.snackbar.open(
                    "Há algo errado com o cadastro.",
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
          "Servico alterado com sucesso",
          "Fechar",
          {
            duration: 10000
          }
        );
      }, (error) => {
        console.log(error)
        this.snackbar.open(
          "Servico não alterado",
          "Tenta novamente",
          {
            duration: 10000
          }
        );

      });
    }

  private montarBody() {
    let id = this.data?.servico?.id;
    let estabelecimentoID = this.data?.servico?.estabelecimentoID;
    this.servico = this.form.value;
    this.servico.id = id;
    this.servico.estabelecimentoID = estabelecimentoID;
  }
}
