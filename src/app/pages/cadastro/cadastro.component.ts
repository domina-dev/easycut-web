import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

//importação
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger20ms } from 'src/@vex/animations/stagger.animation';



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
    private cd: ChangeDetectorRef) { }

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

  send() {
    this.router.navigate(['/']);
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
