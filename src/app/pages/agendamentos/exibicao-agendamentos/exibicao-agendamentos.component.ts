import { Component, AfterViewInit, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
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
export class ExibicaoAgendamentosComponent implements AfterViewInit, OnInit {
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
  dataSource = new MatTableDataSource<Agendamento>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  currentStatus: any;

  listaAgendamentos: [] = []

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
      
    });
  }

}


