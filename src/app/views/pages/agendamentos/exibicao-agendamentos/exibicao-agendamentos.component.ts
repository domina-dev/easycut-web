import { Component, AfterViewInit, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CadastrarEditarComponent } from 'src/app/core/lib/components/modais/agendamentos/cadastrar-editar/cadastrar-editar.component';
import { Agendamento } from 'src/app/core/model/agendamento';
import { AgendamentoService } from 'src/app/core/services/agendamentos/agendamentos.service';
import { ConfirmacaoComponent } from 'src/app/core/lib/components/modais/confirmacao/confirmacao.component';

@Component({
  selector: 'vex-exibicao-agendamentos',
  templateUrl: './exibicao-agendamentos.component.html',
  styleUrls: ['./exibicao-agendamentos.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExibicaoAgendamentosComponent implements AfterViewInit, OnInit {

  load: boolean = false;

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
  dataSource = new MatTableDataSource<Agendamento>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  currentStatus: any;

  listaAgendamentos: Agendamento[] = []

  constructor(public dialog: MatDialog, private agendamentoService: AgendamentoService) {}

  ngOnInit(): void {
    this.getAgendamentos()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getAgendamentos() {
    this.load = true;
    this.agendamentoService.getAgendamentos().subscribe(response => {
      this.listaAgendamentos = response;
      this.dataSource = new MatTableDataSource<Agendamento>(this.listaAgendamentos);
      this.dataSource.paginator = this.paginator;
      this.load = false;
  },
      (error) => {
        this.load = false;
        console.log(error)});
}
  openDialog() {
    let dialogRef = this.dialog.open(CadastrarEditarComponent,
      {
        
        width: '450px',
      });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  abrirModalDeletar(agendamento: Agendamento): void {
    const dialogRef = this.dialog.open(ConfirmacaoComponent, {
      data: {
        titulo: `Tem certeza que deseja deletar o agendamento: ${agendamento.nomeServico}`
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
