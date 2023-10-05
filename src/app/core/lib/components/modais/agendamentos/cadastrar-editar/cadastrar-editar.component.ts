import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Agendamento } from 'src/app/core/model/agendamento';
import { AgendamentoService } from 'src/app/core/services/agendamentos/agendamentos.service';
import { ExibicaoAgendamentosComponent } from 'src/app/views/pages/agendamentos/exibicao-agendamentos/exibicao-agendamentos.component';

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
    private agendamentoService: AgendamentoService,
    private exibicaoAgendamento: ExibicaoAgendamentosComponent
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

  cadastrarAgendamento(agendamento: Agendamento) {
    this.agendamentoService.CadastraAgendamentos(this.clientForm.value).subscribe(response => {
      this.exibicaoAgendamento.getAgendamentos();

    }, (error) => {
      console.log(error);

    })
    
  }

}
