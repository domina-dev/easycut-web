import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessagesSnackBar } from 'src/app/core/constants/messagesSnackBar';
import { Agendamento } from 'src/app/core/model/agendamento';
import { AgendamentoService } from 'src/app/core/services/agendamentos/agendamentos.service';


@Component({
  selector: 'vex-cadastrar-editar',
  templateUrl: './cadastrar-editar.component.html',
  styleUrls: ['./cadastrar-editar.component.scss']
})
export class CadastrarEditarComponent {

  agendamento = new Agendamento();
  estabelecimentoID = window.localStorage.getItem('estabelecimento_ID');

  form: FormGroup;
  isCadastro!: boolean;
  opcoesStatus = [];

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly fb: FormBuilder,
    private readonly dialogRef: MatDialogRef<CadastrarEditarComponent>,
    private agendamentoService: AgendamentoService,
    private snackbar: MatSnackBar,

  ) {
    this.isCadastro = data?.agendamento ? false : true;
    this.opcoesStatus = this.filtrarOpcoes();
    this.iniciaFormulario();
  }

  iniciaFormulario() {
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
  responsavelObrigatorio(event: any) {
    if (event?.value == 'aceito') {
      this.form.controls['responsavel'].setValidators([Validators.required]);
    }

    else {
      this.form.controls['responsavel'].setValidators([]);
    }
    this.form.controls['responsavel'].patchValue(this.form.get('responsavel').value)
  }

  cadastrarAgendamento() {
    this.agendamento = this.form.value;
    this.agendamento.estabelecimentoID = +this.estabelecimentoID;
    this.agendamentoService.CadastraAgendamentos(this.form.value).subscribe(response => {
      this.dialogRef.close(true);
      this.snackbar.open(
        MessagesSnackBar.ADICIONAR_AGENDAMENTO,
        "Fechar",
        {
          duration: 3000
        }
      )
    }, (error) => {
      console.log(error);
      this.snackbar.open(
        MessagesSnackBar.ERRO_ADICIONAR_AGENDAMENTO,
        "Fechar",
        {
          duration: 3000
        }
      )
    })

  }

  editarAgendamento() {
    this.agendamento = this.form.value;
    this.agendamento.id = this.data.agendamento.id;
    this.agendamento.estabelecimentoID = +this.estabelecimentoID;
    this.agendamentoService.alterarAgendamento(this.agendamento).subscribe(response => {
      this.dialogRef.close(true);
      this.snackbar.open(
        MessagesSnackBar.EDITAR_AGENDAMENTO,
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

  cadastrarEditarAgendamento() {
    this.isCadastro ? this.cadastrarAgendamento() : this.editarAgendamento();
  }

  filtrarOpcoes():any[] {
    if (this.isCadastro) {
      return [
        {
          nome: "Aceito",
          valor: "aceito"
        },
        {
          nome: 'Pendente',
          valor: "pendente",
        }
      ]
    }
    else {
      return [
        {
          nome: "Aceito",
          valor: "aceito"
        },
        {
          nome: 'Pendente',
          valor: "pendente",
        },
        {
          nome: "Recusado",
          valor: "recusado"
        }
      ]
    }
  }


}
