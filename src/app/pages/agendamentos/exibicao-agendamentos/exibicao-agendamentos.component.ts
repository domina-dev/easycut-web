import { Component, AfterViewInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CadastrarEditarComponent } from 'src/app/modais/agendamentos/cadastrar-editar/cadastrar-editar.component';
import { Agendamento } from '../../../model/agendamento'

@Component({
  selector: 'vex-exibicao-agendamentos',
  templateUrl: './exibicao-agendamentos.component.html',
  styleUrls: ['./exibicao-agendamentos.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExibicaoAgendamentosComponent implements AfterViewInit {
  [x: string]: any;
  displayedColumns: string[] = [
    'cliente',
    'servico',
    'tempo',
    'valor',
    'data',
    'responsavel',
    'status'
  ];
  dataSource = new MatTableDataSource<Agendamento>(CLIENTE_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  currentStatus: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(public dialog: MatDialog) {
  }

  openDialog() {
    let dialogRef = this.dialog.open(CadastrarEditarComponent,
      {
        height: '90%',
        width: '500px',
      });

    dialogRef.afterClosed().subscribe(result => {
      CLIENTE_DATA.push(result);
    });
  }
}

const CLIENTE_DATA: Agendamento[] = [
  {
    cliente: 'João Pedro Fiuza',
    servico: 'Cabelo + barba',
    tempo: '60 min',
    valor: 'R$ 80,00',
    data: '13/03/2023',
    responsavel: 'Vito Nunes',
    status: 'recusado'
  },
  {
    cliente: 'João Pedro Fiuza',
    servico: 'Cabelo + barba',
    tempo: '60 min',
    valor: 'R$ 80,00',
    data: '13/03/2023',
    responsavel: 'Vito Nunes',
    status: 'aceito'
  },
  {
    cliente: 'João Pedro Fiuza',
    servico: 'Cabelo + barba',
    tempo: '60 min',
    valor: 'R$ 80,00',
    data: '13/03/2023',
    responsavel: 'Vito Nunes',
    status: 'pendente'
  },
  {
    cliente: 'João Pedro Fiuza',
    servico: 'Cabelo + barba',
    tempo: '60 min',
    valor: 'R$ 80,00',
    data: '13/03/2023',
    responsavel: 'Vito Nunes',
    status: 'aceito'
  },
  {
    cliente: 'João Pedro Fiuza',
    servico: 'Cabelo + barba',
    tempo: '60 min',
    valor: 'R$ 80,00',
    data: '13/03/2023',
    responsavel: 'Vito Nunes',
    status: 'pendente'
  },
  {
    cliente: 'João Pedro Fiuza',
    servico: 'Cabelo + barba',
    tempo: '60 min',
    valor: 'R$ 80,00',
    data: '13/03/2023',
    responsavel: 'Vito Nunes',
    status: 'aceito'
  },
  {
    cliente: 'João Pedro Fiuza',
    servico: 'Cabelo + barba',
    tempo: '60 min',
    valor: 'R$ 80,00',
    data: '13/03/2023',
    responsavel: 'Vito Nunes',
    status: 'pendente'
  },
  {
    cliente: 'João Pedro Fiuza',
    servico: 'Cabelo + barba',
    tempo: '60 min',
    valor: 'R$ 80,00',
    data: '13/03/2023',
    responsavel: 'Vito Nunes',
    status: 'aceito'
  }

];

export { Agendamento };
