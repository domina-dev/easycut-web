import { Component, OnInit, AfterViewInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'exibicao-agendamentos',
  templateUrl: './exibicao-agendamentos.component.html',
  styleUrls: ['./exibicao-agendamentos.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExibicaoAgendamentosComponent implements AfterViewInit {
  displayedColumns: string[] = ['cliente', 'servico', 'tempo', 'valor', 'data', 'responsavel', 'botao'];
  dataSource = new MatTableDataSource<Agendamentos>(CLIENTE_DATA);

  panelColor = new FormControl('pendente');

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {

   }

   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  }

  export interface Agendamentos {
    cliente: string;
    servico: string;
    tempo: string;
    valor: string;
    data: string;
    responsavel: string;
  }
    const CLIENTE_DATA: Agendamentos[] = [
      {cliente: 'João Pedro Fiuza', servico: 'Cabelo + barba', tempo: '60 min', valor: 'R$ 80,00', data: '13/03/2023', responsavel: 'Vito Nunes',},
      {cliente: 'João Pedro Fiuza', servico: 'Cabelo + barba', tempo: '60 min', valor: 'R$ 80,00', data: '13/03/2023', responsavel: 'Vito Nunes',},
      {cliente: 'João Pedro Fiuza', servico: 'Cabelo + barba', tempo: '60 min', valor: 'R$ 80,00', data: '13/03/2023', responsavel: 'Vito Nunes',},
      {cliente: 'João Pedro Fiuza', servico: 'Cabelo + barba', tempo: '60 min', valor: 'R$ 80,00', data: '13/03/2023', responsavel: 'Vito Nunes',},
      {cliente: 'João Pedro Fiuza', servico: 'Cabelo + barba', tempo: '60 min', valor: 'R$ 80,00', data: '13/03/2023', responsavel: 'Vito Nunes',},
      {cliente: 'João Pedro Fiuza', servico: 'Cabelo + barba', tempo: '60 min', valor: 'R$ 80,00', data: '13/03/2023', responsavel: 'Vito Nunes',},
      {cliente: 'João Pedro Fiuza', servico: 'Cabelo + barba', tempo: '60 min', valor: 'R$ 80,00', data: '13/03/2023', responsavel: 'Vito Nunes',},
      {cliente: 'João Pedro Fiuza', servico: 'Cabelo + barba', tempo: '60 min', valor: 'R$ 80,00', data: '13/03/2023', responsavel: 'Vito Nunes',},
    ];
