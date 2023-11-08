import { Endereco } from './../../../../model/endereco';
import { CommomService } from 'src/app/core/services/commom/commom.service';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Estabelecimento } from 'src/app/core/model/estabelecimento';
import { EnderecoService } from 'src/app/core/services/enderecos/enderecos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessagesSnackBar } from 'src/app/core/constants/messagesSnackBar';
import { EstabelecimentoService } from 'src/app/core/services/estabelecimento/estabelecimento.service';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
const appearance: MatFormFieldDefaultOptions = {
  appearance: 'standard'
};
@Component({
  selector: 'vex-completar-cadastro',
  templateUrl: './completarCadastro.component.html',
  styleUrls: ['./completarCadastro.component.scss'],
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: appearance }],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class CompletarCadastroComponent implements OnInit {

  load: boolean = false;

  endereco = new Endereco();

  estabelecimento = new Estabelecimento();

  form: FormGroup;

  mostraIcone: boolean = true;

  constructor(
    private fb: FormBuilder,
    private readonly dialogRef: MatDialogRef<CompletarCadastroComponent>,
    private enderecoService: EnderecoService,
    private estabelecimentoService: EstabelecimentoService,
    private commomService: CommomService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private snackbar: MatSnackBar,
  ) {
    this.form = this.fb.group({
      sobre: [''],
      cep: [this.data?.endereco?.cep, Validators.required],
      numero: [this.data?.endereco?.numero, Validators.required],
      complemento: [this.data?.endereco?.complemento,],
      logradouro: [this.data?.endereco?.logradouro, Validators.required],
      bairro: [this.data?.endereco?.bairro, Validators.required],
      estado: [this.data?.endereco?.estado, Validators.required],
      cidade: [this.data?.endereco?.cidade, Validators.required],
      celular: ['', Validators.required],
      telefone: ['', Validators.required],
    })
   }

  ngOnInit(): void {
    this.estabelecimento = this.commomService.estabelecimentoSessao()
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

  cadastrarEndereco() {
    this.load = true;
    this.endereco = this.form.value;
    this.enderecoService.cadastraEndereco(this.endereco).subscribe(response => {
      this.completarCadastro(response.id);
      this.load = false;
      this.dialogRef.close(true);
      this.snackbar.open(
        MessagesSnackBar.CADASTRO_ENDERECO,
        "Fechar",
        {
          duration: 3000
        }
      )
    }, (error) => {
      this.load = false;
      console.log(error);
      this.snackbar.open(
        MessagesSnackBar.ERRO_CADASTRAR_ENDERECO,
        "Fechar",
        {
          duration: 3000
        }
      )
    })

  }

  completarCadastro(id: number) {
    this.estabelecimento.enderecoID = id
    this.estabelecimento.cadastroCompleto = true
    this.estabelecimentoService.alterarCadastro(this.estabelecimento).subscribe(response => {
      this.snackbar.open(
        MessagesSnackBar.CADASTRO_COMPLETO,
        "Fechar",
        {
          duration: 3000
        }
      )
    }, (error) => {
      console.log(error);
      this.snackbar.open(
        MessagesSnackBar.ERRO_CADASTRAR_COMPLETO,
        "Fechar",
        {
          duration: 3000
        }
      )
    })
  }
}
