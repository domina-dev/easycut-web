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
import { debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs/operators';

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

  constructor(public dialog: MatDialog, private agendamentoService: AgendamentoService) { }

  ngOnInit(): void {
    EventEmitterService.get("buscarAgendamentos").subscribe(() => this.getAgendamentos());
    this.getAgendamentos();
    this.filter.valueChanges
      .pipe(
        map(value => value.trim()),
        filter(value => value.length > 2),
        debounceTime(200),
        distinctUntilChanged(),
        // tap(value => console.log(value)),
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

  openDialog() {
    let dialogRef = this.dialog.open(CadastrarEditarComponent,
      {
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
        // Lógica para excluir o agendamento se o usuário confirmar
        this.excluirAgendamento(agendamento);
      }
    });
  }

  excluirAgendamento(agendamento: Agendamento): void {
    // Implemente a lógica para excluir o agendamento aqui
    // Chame seu serviço ou método para realizar a exclusão
  }
}
