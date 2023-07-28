import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'exebicao-produtos',
  templateUrl: './exebicao-produtos.component.html',
  styleUrls: ['./exebicao-produtos.component.scss']
})
export class ExebicaoProdutosComponent implements AfterViewInit {
  displayedColumns: string[] = ['aplicacao', 'nameProduct', 'description', 'quantidade', 'preco', 'icon'];
  dataSource = new MatTableDataSource<ListaProdutos>(ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface ListaProdutos {
  aplicacao: string;
  nameProduct: string;
  description: string;
  quantidade: string;
  preco: string;
  icon: string;
}

const ELEMENT_DATA: ListaProdutos[] = [
  {aplicacao:'Cabelo' ,nameProduct: 'Pomada Modeladora Blacpool', description: 'BLACKPOOL proporciona uma aparência mais natu', quantidade: '46 unidades', preco: 'R$ 30,00', icon: ''},
  {aplicacao:'Cabelo' ,nameProduct: 'Pomada Modeladora Blacpool', description: 'BLACKPOOL proporciona uma aparência mais natu', quantidade: '46 unidades', preco: 'R$ 30,00', icon: ''},
  {aplicacao:'Cabelo' ,nameProduct: 'Pomada Modeladora Blacpool', description: 'BLACKPOOL proporciona uma aparência mais natu', quantidade: '46 unidades', preco: 'R$ 30,00', icon: ''},
  {aplicacao:'Cabelo' ,nameProduct: 'Pomada Modeladora Blacpool', description: 'BLACKPOOL proporciona uma aparência mais natu', quantidade: '46 unidades', preco: 'R$ 30,00', icon: ''},
  {aplicacao:'Cabelo' ,nameProduct: 'Pomada Modeladora Blacpool', description: 'BLACKPOOL proporciona uma aparência mais natu', quantidade: '46 unidades', preco: 'R$ 30,00', icon: ''},
  {aplicacao:'Cabelo' ,nameProduct: 'Pomada Modeladora Blacpool', description: 'BLACKPOOL proporciona uma aparência mais natu', quantidade: '46 unidades', preco: 'R$ 30,00', icon: ''},
  {aplicacao:'Cabelo' ,nameProduct: 'Pomada Modeladora Blacpool', description: 'BLACKPOOL proporciona uma aparência mais natu', quantidade: '46 unidades', preco: 'R$ 30,00', icon: ''},
];
