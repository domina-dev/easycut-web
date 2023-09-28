import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Agendamento } from 'src/app/core/model/agendamento';

@Component({
  selector: 'vex-cadastrar-editar',
  templateUrl: './cadastrar-editar.component.html',
  styleUrls: ['./cadastrar-editar.component.scss']
})
export class CadastrarEditarComponent {
  public clientForm: FormGroup;

  public userData?: Agendamento;

  constructor(
    private readonly fb: FormBuilder,
    private readonly dialogRef: MatDialogRef<any>,
  ) {
    this.clientForm = fb.group({
      cliente: [''],
      servico: [''],
      tempo: [''],
      valor: [''],
      data: [''],
      responsavel: [''],
      status: [''],
    })

  }

  public addUser() {
    this.userData = this.clientForm.value;
    this.dialogRef.close(this.userData);
  }

}
