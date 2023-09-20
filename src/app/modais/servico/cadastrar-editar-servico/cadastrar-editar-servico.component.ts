import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ServicoService } from 'src/app/services/servico/servico.service';


@Component({
    selector: 'vex-cadastrar-editar-servico',
    templateUrl: './cadastrar-editar-servico.component.html',
    styleUrls: ['./cadastrar-editar-servico.component.scss']
})
export class CadastrarEditarServicoComponent {
    form: FormGroup;
    dialog: any;

    constructor(private fb: FormBuilder, private servicoService: ServicoService, 
        private readonly dialogRef: MatDialogRef<CadastrarEditarServicoComponent>) {
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
            
        },
            (error) => {
                console.log(error)

                
            })
    }



}
