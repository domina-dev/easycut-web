import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MENSAGENS } from 'src/app/core/constants/mensagens';
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

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly fb: FormBuilder,
    private readonly dialogRef: MatDialogRef<CadastrarEditarComponent>,
    private agendamentoService: AgendamentoService,
    private snackbar: MatSnackBar,
  
  ) {
    this.isCadastro = data?.agendamento? false : true;
    this.form = this.fb.group({
      nomeCliente: [data?.agendamento?.nomeCliente, Validators.required],
      nomeServico: [data?.agendamento?.nomeServico, Validators.required],
      tempoEstimado: [data?.agendamento?.tempoEstimado, Validators.required],
      valor: [data?.agendamento?.valor, Validators.required],
      dtAtendimento: [data?.agendamento?.dtAtendimento, Validators.required],
      status: [data?.agendamento?.status, Validators.required],
      hrAtendimento: [data?.agendamento?.hrAtendimento, Validators.required],
      responsavel: ['']
  })

  console.log("TESTE", this.estabelecimentoID);
  

  }

  cadastrarAgendamento() {

    this.agendamento = this.form.value;
    this.agendamento.estabelecimentoID = +this.estabelecimentoID;
    this.agendamentoService.CadastraAgendamentos(this.form.value).subscribe(response => {
      this.dialogRef.close(true);
      this.snackbar.open(
        MENSAGENS.ADICIONAR_AGENDAMENTO,
        "Fechar"
      )
    }, (error) => {
      console.log(error);
      this.snackbar.open(
        MENSAGENS.ERRO_ADICIONAR_AGENDAMENTO,
        "Tentar novamente"
      )

    })
    
  }

  editarAgendamento(){
    //chamada de service para editar agendamento
    //fechar a modal no subscribe desse método passando true
  }

  cadastrarEditarAgendamento(){
    this.isCadastro?this.cadastrarAgendamento() : this.editarAgendamento();
  }


}
