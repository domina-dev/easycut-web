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

  load: boolean = false;

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
    this.isCadastro = !data?.agendamento;
    this.opcoesStatus = this.filtrarOpcoes();
    this.iniciaFormulario();
  }

  iniciaFormulario() {
    this.form = new FormGroup({
      nomeCliente: new FormControl(this.data?.agendamento?.nomeCliente, [Validators.required]),
      nomeServico: new FormControl(this.data?.agendamento?.nomeServico, [Validators.required]),
      tempoEstimado: new FormControl(this.data?.agendamento?.tempoEstimado, [Validators.required, Validators.pattern("^[0-9]*$")]),
      valor: new FormControl(this.data?.agendamento?.valor, [Validators.required, Validators.pattern("^[0-9]*$")]),
      dtAtendimento: new FormControl(this.data?.agendamento?.dtAtendimento, [Validators.required]),
      status: new FormControl(this.data?.agendamento?.status, [Validators.required]),
      hrAtendimento: new FormControl(this.data?.agendamento?.hrAtendimento, [Validators.required]),
      responsavel: new FormControl(this.data?.agendamento?.responsavel)
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
    if (this.form.invalid) {
      this.snackbar.open(
        MessagesSnackBar.ERRO_VALIDACAO,
        "Fechar",
        {
          duration: 5000
        }
      )
      return;
    }
    this.load = true;
    this.agendamento = this.form.value;
    this.agendamento.estabelecimentoID = +this.estabelecimentoID;
    this.agendamentoService.CadastraAgendamentos(this.form.value).subscribe(() => {
      this.load = false;
      this.dialogRef.close(true);
      this.snackbar.open(
        MessagesSnackBar.ADICIONAR_AGENDAMENTO,
        "Fechar",
        {
          duration: 3000
        }
      )
    }, (error) => {
      this.load = false;
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
    if (this.form.invalid) {
      this.snackbar.open(
        MessagesSnackBar.ERRO_VALIDACAO,
        "Fechar",
        {
          duration: 5000
        }
      )
      return;
    }
    this.load = true;
    this.agendamento = this.form.value;
    this.agendamento.id = this.data.agendamento.id;
    this.agendamento.estabelecimentoID = +this.estabelecimentoID;
    this.agendamentoService.alterarAgendamento(this.agendamento).subscribe(response => {
      this.load = false;
      this.dialogRef.close(true);
      this.snackbar.open(
        MessagesSnackBar.EDITAR_AGENDAMENTO,
        "Fechar",
        {
          duration: 3000
        }
      )
    }, (error) => {
      this.load = false;
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

  filtrarOpcoes(): any[] {
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
