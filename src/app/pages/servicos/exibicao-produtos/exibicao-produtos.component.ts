import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'exibicao-produtos',
  templateUrl: './exibicao-produtos.component.html',
  styleUrls: ['./exibicao-produtos.component.scss']
})
export class ExibicaoProdutosComponent implements AfterViewInit {
  displayedColumns: string[] = ['aplicacao', 'nomeProduto', 'descricao', 'quantidade', 'preco', 'icone'];
  dataSource = new MatTableDataSource<ListaProdutos>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface ListaProdutos {
  aplicacao: string;
  nomeProduto: string;
  descricao: string;
  quantidade: string;
  preco: string;
  icone: string;
}

const ELEMENT_DATA: ListaProdutos[] = [
  {aplicacao:'Cabelo' ,nomeProduto: 'Pomada Modeladora Blacpool', descricao: 'BLACKPOOL proporciona uma aparência mais natu', quantidade: '46 unidades', preco: 'R$ 30,00', icone: ''},
  {aplicacao:'Cabelo' ,nomeProduto: 'Pomada Modeladora Blacpool', descricao: 'BLACKPOOL proporciona uma aparência mais natu', quantidade: '46 unidades', preco: 'R$ 30,00', icone: ''},
  {aplicacao:'Cabelo' ,nomeProduto: 'Pomada Modeladora Blacpool', descricao: 'BLACKPOOL proporciona uma aparência mais natu', quantidade: '46 unidades', preco: 'R$ 30,00', icone: ''},
  {aplicacao:'Cabelo' ,nomeProduto: 'Pomada Modeladora Blacpool', descricao: 'BLACKPOOL proporciona uma aparência mais natu', quantidade: '46 unidades', preco: 'R$ 30,00', icone: ''},
  {aplicacao:'Cabelo' ,nomeProduto: 'Pomada Modeladora Blacpool', descricao: 'BLACKPOOL proporciona uma aparência mais natu', quantidade: '46 unidades', preco: 'R$ 30,00', icone: ''},
  {aplicacao:'Cabelo' ,nomeProduto: 'Pomada Modeladora Blacpool', descricao: 'BLACKPOOL proporciona uma aparência mais natu', quantidade: '46 unidades', preco: 'R$ 30,00', icone: ''},
  {aplicacao:'Cabelo' ,nomeProduto: 'Pomada Modeladora Blacpool', descricao: 'BLACKPOOL proporciona uma aparência mais natu', quantidade: '46 unidades', preco: 'R$ 30,00', icone: ''},
];
