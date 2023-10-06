import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  form: FormGroup;

  public userData?: Agendamento;

  constructor(
    private readonly fb: FormBuilder,
    private readonly dialogRef: MatDialogRef<CadastrarEditarComponent>,
    private agendamentoService: AgendamentoService
  ) {
    this.form = this.fb.group({
      cliente: ['', Validators.required],
      servico: ['', Validators.required],
      tempo: ['', Validators.required],
      valor: ['', Validators.required],
      data: ['', Validators.required],
      status: ['', Validators.required],
      hora: ['', Validators.required],
      responsavel: ['']
  })

  }

  cadastrarAgendamento() {
    this.agendamentoService.CadastraAgendamentos(this.form.value).subscribe(response => {

      //fechar a modal aqui passando true
    }, (error) => {
      console.log(error);

    })
    
  }

  editarAgendamento(){
    //chamada de service para editar agendamento
    //fechar a modal no subscribe desse método passando true
  }

  cadastrarEditarAgendamento(){
    //if for cadastro this.cadastrarAgendamento()
    //se não this.editarAgendamento()
  }

}
