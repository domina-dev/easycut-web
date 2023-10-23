import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
export class EditarStatusComponent {

  load: boolean = false;

  agendamento = new Agendamento();
  form: FormGroup;

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: { statusInicial: string, statusFinal: string, agendamento: Agendamento },
    private readonly fb: FormBuilder,
    private readonly dialogRef: MatDialogRef<EditarStatusComponent>,
    private agendamentoService: AgendamentoService,
    private snackbar: MatSnackBar,

  ) {}

  editarAgendamento() {
    this.load = true;
    this.agendamento = this.data.agendamento
    this.agendamento.status = this.data.statusFinal
    this.agendamentoService.alterarAgendamento(this.agendamento).subscribe(response => {
      this.load = false;
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
      this.load = false;
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
