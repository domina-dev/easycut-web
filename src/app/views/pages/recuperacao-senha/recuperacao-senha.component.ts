import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import icMail from '@iconify/icons-ic/twotone-mail';

import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { EstabelecimentoService } from 'src/app/core/services/estabelecimento/estabelecimento.service';

@Component({
    selector: 'vex-recuperacao-senha',
    templateUrl: './recuperacao-senha.component.html',
    styleUrls: ['./recuperacao-senha.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [fadeInUp400ms],
})
export class RecuperacaoSenhaComponent {
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
                'Não podemos recuperar sua senha, sem seu e-mail.',
                'FECHAR',
                {
                    duration: 10000
                }
            );
        } else {
            this.estabelecimentoService.recuperacaoSenha(email).subscribe(response => {
                this.snackbar.open(response.body.resposta, 'Fechar', {
                    duration: 5000
                });
            }, (error) => {
                this.snackbar.open(error.message, 'Fechar', {
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