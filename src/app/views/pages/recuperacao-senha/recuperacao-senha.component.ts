import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import icMail from '@iconify/icons-ic/twotone-mail';

import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { EstabelecimentoService } from 'src/app/core/services/estabelecimento/estabelecimento.service';
import { MessagesSnackBar } from 'src/app/core/constants/messagesSnackBar';

@Component({
    selector: 'vex-recuperacao-senha',
    templateUrl: './recuperacao-senha.component.html',
    styleUrls: ['./recuperacao-senha.component.scss'],
    animations: [fadeInUp400ms],
})
export class RecuperacaoSenhaComponent {

  load: boolean = false;

    form: FormGroup;
    icMail = icMail;

    constructor(
        private fb: FormBuilder,
        private snackbar: MatSnackBar,
        private estabelecimentoService: EstabelecimentoService
    ) {
        this.form = this.fb.group({
            email: ['', Validators.required]
        });
    }

    recuperarSenha() {
        const email = this.form.get('email').value;
        if (!email) {
            this.snackbar.open(
                MessagesSnackBar.ERRO_RECUPERAR_SENHA,
                'FECHAR',
                {
                    duration: 10000
                }
            );
        } else {
          this.load = true;
            this.estabelecimentoService.recuperacaoSenha(email).subscribe(response => {
              this.load = false;
                this.snackbar.open(response.body.resposta, 'Fechar', {
                    duration: 5000
                });
            }, (error) => {
              this.load = false;
                this.snackbar.open(MessagesSnackBar.ERRO_RECUPERAR_SENHA, 'Fechar', {
                    duration: 5000,
                    panelClass: ['error-snackbar']
                });
            }
            );
        }
    }
    fechar() {
        this.snackbar.dismiss();
    }
}
