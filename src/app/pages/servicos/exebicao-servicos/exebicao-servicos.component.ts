import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'exebicao-servicos',
  templateUrl: './exebicao-servicos.component.html',
  styleUrls: ['./exebicao-servicos.component.scss']
})
export class ExebicaoServicosComponent implements AfterViewInit {
  displayedColumns: string[] = ['aplicacao', 'servico', 'descricao', 'tempo', 'preco', 'icone'];
  dataSource = new MatTableDataSource<ListaServicos>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface ListaServicos {
  aplicacao: string;
  servico: string;
  descricao: string;
  tempo: string;
  preco: string;
  icone: string;
}

const ELEMENT_DATA: ListaServicos[] = [
  { aplicacao: 'Cabelo', servico: 'Corte simples', descricao: 'Corte de cabelo masculino simples', tempo: '30 min-50min', preco: 'R$ 30,00', icone: '' },
  { aplicacao: 'Cabelo', servico: 'Corte simples', descricao: 'Corte de cabelo masculino simples', tempo: '30 min-50min', preco: 'R$ 30,00', icone: '' },
  { aplicacao: 'Cabelo', servico: 'Corte simples', descricao: 'Corte de cabelo masculino simples', tempo: '30 min-50min', preco: 'R$ 30,00', icone: '' },
  { aplicacao: 'Cabelo', servico: 'Corte simples', descricao: 'Corte de cabelo masculino simples', tempo: '30 min-50min', preco: 'R$ 30,00', icone: '' },
  { aplicacao: 'Cabelo', servico: 'Corte simples', descricao: 'Corte de cabelo masculino simples', tempo: '30 min-50min', preco: 'R$ 30,00', icone: '' },
  { aplicacao: 'Cabelo', servico: 'Corte simples', descricao: 'Corte de cabelo masculino simples', tempo: '30 min-50min', preco: 'R$ 30,00', icone: '' },
  { aplicacao: 'Cabelo', servico: 'Corte simples', descricao: 'Corte de cabelo masculino simples', tempo: '30 min-50min', preco: 'R$ 30,00', icone: '' },
  { aplicacao: 'Cabelo', servico: 'Corte simples', descricao: 'Corte de cabelo masculino simples', tempo: '30 min-50min', preco: 'R$ 30,00', icone: '' },
];