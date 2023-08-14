import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'vex-cadastrar-editar',
  templateUrl: './cadastrar-editar.component.html',
  styleUrls: ['./cadastrar-editar.component.scss']
})
export class CadastrarEditarComponent implements OnInit  {
  public clientForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly dialogRef: MatDialogRef<any>,
    ) {
    this.clientForm = fb.group({
      nome: [''],
      cpf: [''],
      sexo: [''],
      dataNascimento: [''],
      pcd: [''],
      email: [''],
      telefone: [''],
      rua: [''],
      n: [''],
    })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



}
