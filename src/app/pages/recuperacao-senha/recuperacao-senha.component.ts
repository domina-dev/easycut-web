import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { fadeInUp400ms } from '../../../@vex/animations/fade-in-up.animation';
import icMail from '@iconify/icons-ic/twotone-mail';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'vex-recuperacao-senha',
  templateUrl: './recuperacao-senha.component.html',
  styleUrls: ['./recuperacao-senha.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInUp400ms]
})
export class RecuperacaoSenhaComponent implements OnInit {

  form: FormGroup;

  icMail = icMail;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private snackbar: MatSnackBar

  ) {
    this.form = this.fb.group({
      email: ['', Validators.required]
    });
   }

  ngOnInit() {

  }

  enviar() {
    if (!this.form.get('email').value ) {
      this.snackbar.open('Não podemos recuperar sua senha, sem seu e-mail.', 'DIGITE UM E-MAIL VALIDO', {
      duration: 10000
    });
    } else {this.fechar()}

  }
  fechar() {
    this.snackbar.dismiss()
  }
}
