import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'vex-completarCadastro',
  templateUrl: './completarCadastro.component.html',
  styleUrls: ['./completarCadastro.component.scss']
})
export class CompletarCadastroComponent {
  form: FormGroup;


  constructor(
    private fb: FormBuilder
    ) { }

    ngOnInit(): void {
      this.form = this.fb.group({
        sobre: [''],
        cep: ['', Validators.required],
        numero: ['', Validators.required],
        complemento: [''],
        logradouro: ['', Validators.required],
        bairro: ['', Validators.required],
        estado: ['', Validators.required],
        cidade: ['', Validators.required],
        email: ['', Validators.required],
        celular: ['', Validators.required],
        telefone: ['', Validators.required],
      });
    }
 }
 