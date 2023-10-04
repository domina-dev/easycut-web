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
import { LoginModalComponent } from 'src/app/core/lib/components/modais/primeiro-login/login-modal/login-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { PlanosComponent } from 'src/app/core/lib/components/modais/planos/planos-modal/planos.component';

@Component({
  selector: 'vex-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInUp400ms]
})
export class LoginComponent {
  form: FormGroup;

  firstLogin: boolean;
  planoLogin: null;

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
    private estabelecimentoService: EstabelecimentoService,
    public dialog: MatDialog
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

   login() {
    this.estabelecimentoService.saveUsuario(this.usuario).subscribe(response => {
      localStorage.setItem("login", JSON.stringify(response));
      this.abrirModais(response.primeiroLogin, response.plano_ID);

      // this.router.navigate(['/']);

    },
      (error) => {
        this.snackbar.open
          (
            'Email ou senha incorretos, ou usuario nao cadastrado',
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

  openModalCadastro() {

    const dialogRef = this.dialog.open(LoginModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      // this.dialog.open(PlanosComponent);
    });

  }

  abrirModais(primeiroLogin, plano_ID) {
    if (!primeiroLogin) {
      return this.openModalCadastro();
    }
    if (!plano_ID) {
      return this.dialog.open(PlanosComponent);
    }
  }
}


