import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';

import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { Usuario } from 'src/app/core/model/usuario';
import { EstabelecimentoService } from 'src/app/core/services/estabelecimento/estabelecimento.service';
import { MENSAGENS } from 'src/app/core/constants/mensagens';

@Component({
    selector: 'vex-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [fadeInUp400ms]
})
export class LoginComponent {
    form: FormGroup;

    inputType = 'password';
    visible = false;

    icVisibility = icVisibility;
    icVisibilityOff = icVisibilityOff;

    public usuario = new Usuario();

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private cd: ChangeDetectorRef,
        private snackbar: MatSnackBar,
        private estabelecimentoService: EstabelecimentoService
    ) {
        this.form = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {
        this.estabelecimentoService.saveUsuario(this.usuario).subscribe(response =>
        {
          localStorage.setItem("login", JSON.stringify(response));
          this.router.navigate(['/']);
          console.log(localStorage.getItem("login"));
        },
          (error) => {
        this.snackbar.open
        (
            MENSAGENS.ERRO_LOGIN,
            'fechar',
            {
                duration: 5000
            }
        );
            console.log(error)
          });
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
