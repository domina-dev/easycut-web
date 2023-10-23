import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessagesSnackBar } from 'src/app/core/constants/messagesSnackBar';
import { Agendamento } from 'src/app/core/model/agendamento';
import { AgendamentoService } from 'src/app/core/services/agendamentos/agendamentos.service';


@Component({
  selector: 'vex-editar-status',
  templateUrl: './editar-status.component.html',
  styleUrls: ['./editar-status.component.scss']
})
export class EditarStatusComponent implements OnInit {

  agendamento = new Agendamento();
  estabelecimentoID = window.localStorage.getItem('estabelecimento_ID');

  form: FormGroup;

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly fb: FormBuilder,
    private readonly dialogRef: MatDialogRef<EditarStatusComponent>,
    private agendamentoService: AgendamentoService,
    private snackbar: MatSnackBar,

  ) {
    this.voidFormulario();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  voidFormulario() {
    this.form = this.fb.group({
      nomeCliente: [this.data?.agendamento?.nomeCliente, Validators.required],
      nomeServico: [this.data?.agendamento?.nomeServico, Validators.required],
      tempoEstimado: [this.data?.agendamento?.tempoEstimado, Validators.required],
      valor: [this.data?.agendamento?.valor, Validators.required],
      dtAtendimento: [this.data?.agendamento?.dtAtendimento, Validators.required],
      status: [this.data?.agendamento?.status, Validators.required],
      hrAtendimento: [this.data?.agendamento?.hrAtendimento, Validators.required],
      responsavel: [this.data?.agendamento?.responsavel]
    })
  }

  editarAgendamento() {
    this.agendamento = this.form.value;
    this.agendamento.id = this.data.agendamento.id;
    this.agendamento.estabelecimentoID = +this.estabelecimentoID;
    this.agendamentoService.alterarAgendamento(this.agendamento).subscribe(response => {
      this.dialogRef.close(true);
      this.snackbar.open(
        MessagesSnackBar.EDITAR_AGENDAMENTO_STATUS,
        "Fechar",
        {
          duration: 3000
        }
      )
    }, (error) => {
      console.log(error);
      this.snackbar.open(
        MessagesSnackBar.ERRO_EDITAR_AGENDAMENTO,
        "Fechar",
        {
          duration: 3000
        }
      )
    })
  }


}
