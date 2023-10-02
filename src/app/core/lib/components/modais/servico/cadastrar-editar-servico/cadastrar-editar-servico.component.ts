import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServicoService } from 'src/app/core/services/servico/servico.service';


@Component({
    selector: 'vex-cadastrar-editar-servico',
    templateUrl: './cadastrar-editar-servico.component.html',
    styleUrls: ['./cadastrar-editar-servico.component.scss']
})
export class CadastrarEditarServicoComponent {
    form: FormGroup;

    constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder, private servicoService: ServicoService,
        private readonly dialogRef: MatDialogRef<CadastrarEditarServicoComponent>,
        private snackbar: MatSnackBar) {
        this.form = this.fb.group({
            nome: [data?.servico?.nome, Validators.required],
            tempo: [data?.servico?.tempoEstimado, Validators.required],
            categoria: [data?.servico?.categoria.value, Validators.required],
            valor: [data?.servico?.valor, Validators.required]
        });
    }

    cadastrarServico() {
        this.servicoService.cadastrarServico(this.form.value).subscribe(() => {
            console.log(this.form.value);
            this.dialogRef.close()
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



}
