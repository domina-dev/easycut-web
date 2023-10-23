import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CadastrarEditarComponent } from 'src/app/core/lib/components/modais/agendamentos/cadastrar-editar/cadastrar-editar.component';
import { Agendamento } from 'src/app/core/model/agendamento';
import { AgendamentoService } from 'src/app/core/services/agendamentos/agendamentos.service';
import { ConfirmacaoComponent } from 'src/app/core/lib/components/modais/confirmacao/confirmacao.component';
import { FormControl, FormGroup } from '@angular/forms';
import { EventEmitterService } from 'src/app/core/services/event.service';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { EditarStatusComponent } from 'src/app/core/lib/components/modais/agendamentos/editar-status/editar-status/editar-status.component';
import { MessagesSnackBar } from 'src/app/core/constants/messagesSnackBar';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'vex-exibicao-agendamentos',
  templateUrl: './exibicao-agendamentos.component.html',
  styleUrls: ['./exibicao-agendamentos.component.scss'],
})

export class ExibicaoAgendamentosComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = [
    'cliente',
    'servico',
    'tempo',
    'valor',
    'data',
    'responsavel',
    'status',
    'icone',
  ];

  form: FormGroup;

  load: boolean = false;

  currentStatus: any;

  listaAgendamentos: Agendamento[] = [];

  agendamentoHoje: number;

  filter = new FormControl();

  dtInicial: Date;

  dtFinal: Date;

  dataSource = new MatTableDataSource<Agendamento>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public dialog: MatDialog, private agendamentoService: AgendamentoService, private snackbar: MatSnackBar,) { }

  ngOnInit(): void {
    EventEmitterService.get("buscarAgendamentos").subscribe(() => this.getAgendamentos());
    this.getAgendamentos();
    this.filter.valueChanges
      .pipe(
        map(value => value.trim()),
        filter(value => value.length > 2),
        debounceTime(200),
        distinctUntilChanged(),
      );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  filtrarTabela(data: Date, tipoDt: string) {
    switch (tipoDt) {
      case "inicial":
        this.dtInicial = data
        break;

      case "final":
        this.dtFinal = data
        break;
    };
    let dataInicial = this.dtInicial.getFullYear() + "-" + this.dtInicial.getMonth() + 1 + "-" + this.dtInicial.getDay();
    let dataFinal = this.dtFinal.getFullYear() + "-" + this.dtFinal.getMonth() + 1 + "-" + this.dtFinal.getDay()

    this.filtrarAgendamentos(this.filter.value, "TODOS", dataInicial, dataFinal)
  }

  filtrarAgendamentos(filter: string, status: string, dtInicial: string, dtFinal: string) {
    this.load = true;
    this.agendamentoService.filtrarAgendamentos(filter, status, dtInicial, dtFinal).subscribe(response => {
      this.listaAgendamentos = response;
      this.dataSource = new MatTableDataSource<Agendamento>(this.listaAgendamentos);
      this.dataSource.paginator = this.paginator;
      this.load = false;
    },
      (error) => {
        this.load = false;
        console.log(error)
      });
  }

  limparFiltro() {
    this.filter.reset();
  }

  getAgendamentos() {
    this.load = true;
    this.agendamentoHoje = +window.localStorage.getItem('agendamentoHoje');
    window.localStorage.removeItem('agendamentoHoje');
    this.agendamentoService.getAgendamentos().subscribe(response => {
      this.listaAgendamentos = response;
      this.dataSource = new MatTableDataSource<Agendamento>(this.listaAgendamentos);
      this.dataSource.paginator = this.paginator;
      this.load = false;
    },
      (error) => {
        this.load = false;
        console.log(error)
      });
  }
  abrirModalCadastrarEditar(agendamento?: Agendamento) {
    let dialogRef = this.dialog.open(CadastrarEditarComponent,
      {
        data: { agendamento: agendamento },
        width: '450px',
      });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getAgendamentos();
        //chama sua listagem
      }
    });
  }

  abrirModalDeletar(agendamento: Agendamento): void {
    const dialogRef = this.dialog.open(ConfirmacaoComponent, {
      data: {
        itens: [agendamento.nomeServico],
        legendaAcao: 'Tem certeza que deseja EXCLUIR esse item?'
      }
    });


    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.excluirAgendamento(agendamento);
      }
    });
  }

  abrirModalEditarStatus(statusFinal:string, agendamento?: Agendamento) {
    let statusInicial: string = this.listaAgendamentos.find(x => x.id == agendamento.id)?.status;
    let dialogRef = this.dialog.open(EditarStatusComponent,
      {
        data: {
          statusInicial: statusInicial,
          statusFinal: statusFinal,
          agendamento: agendamento
        },
      });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getAgendamentos();
      }
    });
  }


  excluirAgendamento(agendamento: Agendamento): void {
    this.agendamentoService.deletarAgendamento(agendamento.id).subscribe(() => {
      this.getAgendamentos();
      this.snackbar.open(
        MessagesSnackBar.DELETAR_AGENDAMENTO,
        "Fechar",
        {
          duration: 3000
        }
      )
    },(error) => {
      this.snackbar.open(
        MessagesSnackBar.ERRO_DELETAR_AGENDAMENTO,
        "Fechar",
        {
          duration: 3000
        }
      )
    })
  }
}
