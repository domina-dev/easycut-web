import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Agendamento } from 'src/app/core/model/agendamento';

@Component({
  selector: 'vex-cadastrar-editar',
  templateUrl: './cadastrar-editar.component.html',
  styleUrls: ['./cadastrar-editar.component.scss']
})
export class CadastrarEditarComponent {
  form: FormGroup;

  public userData?: Agendamento;

  constructor(
    private readonly fb: FormBuilder,
    private readonly dialogRef: MatDialogRef<CadastrarEditarComponent>,
  ) {
    this.form = this.fb.group({
      cliente: ['', Validators.required],
      servico: ['', Validators.required],
      tempo: ['', Validators.required],
      valor: ['', Validators.required],
      data: ['', Validators.required],
      status: ['', Validators.required],
      hora: ['', Validators.required]
  })

  }

  public addUser() {
    this.userData = this.form.value;
    this.dialogRef.close(this.userData);
  }

}
