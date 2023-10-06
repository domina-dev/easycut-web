import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MENSAGENS } from 'src/app/core/constants/mensagens';
import { ServicoService } from 'src/app/core/services/servico/servico.service';


@Component({
    selector: 'vex-cadastrar-editar-servico',
    templateUrl: './cadastrar-editar-servico.component.html',
    styleUrls: ['./cadastrar-editar-servico.component.scss']
})
export class CadastrarEditarServicoComponent {
    form: FormGroup;

    constructor(private fb: FormBuilder, private servicoService: ServicoService,
        private readonly dialogRef: MatDialogRef<CadastrarEditarServicoComponent>,
        private snackbar: MatSnackBar) {
        this.form = this.fb.group({
            nome: ['', Validators.required],
            tempo: ['', Validators.required],
            categoria: ['', Validators.required],
            valor: ['', Validators.required]
        });
    }

    cadastrarServico() {
        this.servicoService.cadastrarServico(this.form.value).subscribe(() => {
            console.log(this.form.value);
            this.dialogRef.close()
            this.snackbar.open(
                MENSAGENS.ADICIONAR_SERVICO,
                "Fechar",
                {
                    duration: 10000
                }
            );
        },
            (error) => {
                console.log(error);
                this.snackbar.open(
                    MENSAGENS.ERRO_ADICIONAR_SERVICO,
                    "Tente novamente",
                    {
                        duration: 10000
                    }
                );

            })
    }



}
