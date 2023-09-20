import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

//importação
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger20ms } from 'src/@vex/animations/stagger.animation';
import { Estabelecimento } from 'src/app/model/estabelecimento';
import { EstabelecimentoService } from 'src/app/services/estabelecimento/estabelecimento.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'vex-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
  //importacao
  animations: [
    fadeInUp400ms,
    stagger20ms
  ]
})
export class CadastroComponent implements OnInit {

  form: FormGroup;

  inputType = 'password';
  visible = false;

  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;


  constructor(private router: Router,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private estabelecimentoService: EstabelecimentoService,
    private _snackBar: MatSnackBar
    ) { }
    

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      establishment: ['', Validators.required],
      cpfCnpj: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required],
    });
  }

  cadastrarEstabelecimento() {

      const estabelecimentoData: Estabelecimento = {
        nomeProprietario: this.form.get('name').value,
        estabelecimento: this.form.get('establishment').value,
        cpf_cnpj: this.form.get('cpfCnpj').value,
        email: this.form.get('email').value,
        senha: this.form.get('password').value,
        cadastroCompleto: false,
        enderecoID: null,
        planoID: null,
        plano: null,
      };

      this.estabelecimentoService.cadastrarEstabelecimento(estabelecimentoData).subscribe(
        (response) => {
          // Trate a resposta de sucesso aqui e exiba uma mensagem com MatSnackBar
          this._snackBar.open('Estabelecimento cadastrado com sucesso!', 'Fechar', {
            duration: 5000, // Duração da mensagem (em milissegundos)
          });
          
          // Redirecione para a página desejada após o cadastro
          this.form.reset();
        },
        (error) => {
          // Trate o erro aqui e exiba uma mensagem de falha ao cadastrar com MatSnackBar
          this._snackBar.open('Falha ao cadastrar estabelecimento', 'Fechar', {
            duration: 5000, // Duração da mensagem (em milissegundos)
          });
          console.error('Falha ao cadastrar estabelecimento', error);
        }
      );
    
  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }

}
