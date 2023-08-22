import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'vex-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.scss']
})
export class CadastrarProdutoComponent {

  form: FormGroup;

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            nome: ['', Validators.required],
            tempo: ['', Validators.required],
            categoria: ['', Validators.required],
            valor: ['', Validators.required]
        });
    }

}
