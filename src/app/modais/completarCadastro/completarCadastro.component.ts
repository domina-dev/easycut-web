import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';

@Component({
  selector: 'vex-completar-cadastro',
  templateUrl: './completarCadastro.component.html',
  styleUrls: ['./completarCadastro.component.scss'],
	animations: [
		stagger60ms,
		fadeInUp400ms
	]
})
export class CompletarCadastroComponent implements OnInit {
  form: FormGroup;

  mostraIcone: boolean = true;

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
 