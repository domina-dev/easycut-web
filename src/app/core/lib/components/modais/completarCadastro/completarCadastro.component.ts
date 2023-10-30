import { CommomService } from 'src/app/core/services/commom/commom.service';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    private fb: FormBuilder,
    private commomService: CommomService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
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

  capturarImagem(event: Event, inputType: string) {
    const inputElement = event.target as HTMLInputElement;
    const selectedFile = inputElement.files[0];

    if (selectedFile) {
      console.log(`${inputType} selecionada:`, selectedFile);
    }
  }

  buscarCep(cep: string) {
    this.commomService.buscarViaCep(cep).subscribe((data) => {
      this.preencherEndereco(data)
    })
  }

  preencherEndereco(data){
    this.form.patchValue({
      numero: data.numero,
      complemento: data.complemento,
      logradouro: data.logradouro,
      bairro: data.bairro,
      estado: data.uf,
      cidade: data.localidade,
    })
  }
}
