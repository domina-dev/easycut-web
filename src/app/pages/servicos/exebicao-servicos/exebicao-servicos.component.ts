import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'exebicao-servicos',
  templateUrl: './exebicao-servicos.component.html',
  styleUrls: ['./exebicao-servicos.component.scss']
})
export class ExebicaoServicosComponent implements AfterViewInit {
  displayedColumns: string[] = ['aplicacao', 'servico', 'descricao', 'tempo', 'preco', 'icone'];
  dataSource = new MatTableDataSource<ListaProdutos>(ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface ListaProdutos {
  aplicacao: string;
  servico: string;
  descricao: string;
  tempo: string;
  preco: string;
  icone: string;
}

const ELEMENT_DATA: ListaProdutos[] = [
  {aplicacao:'Cabelo' ,servico: 'Corte simples', descricao: 'Corte de cabelo masculino simples', tempo: '30 min-50min', preco: 'R$ 30,00', icone: ''},
  {aplicacao:'Cabelo' ,servico: 'Corte simples', descricao: 'Corte de cabelo masculino simples', tempo: '30 min-50min', preco: 'R$ 30,00', icone: ''},
  {aplicacao:'Cabelo' ,servico: 'Corte simples', descricao: 'Corte de cabelo masculino simples', tempo: '30 min-50min', preco: 'R$ 30,00', icone: ''},
  {aplicacao:'Cabelo' ,servico: 'Corte simples', descricao: 'Corte de cabelo masculino simples', tempo: '30 min-50min', preco: 'R$ 30,00', icone: ''},
  {aplicacao:'Cabelo' ,servico: 'Corte simples', descricao: 'Corte de cabelo masculino simples', tempo: '30 min-50min', preco: 'R$ 30,00', icone: ''},
  {aplicacao:'Cabelo' ,servico: 'Corte simples', descricao: 'Corte de cabelo masculino simples', tempo: '30 min-50min', preco: 'R$ 30,00', icone: ''},
  {aplicacao:'Cabelo' ,servico: 'Corte simples', descricao: 'Corte de cabelo masculino simples', tempo: '30 min-50min', preco: 'R$ 30,00', icone: ''},
  {aplicacao:'Cabelo' ,servico: 'Corte simples', descricao: 'Corte de cabelo masculino simples', tempo: '30 min-50min', preco: 'R$ 30,00', icone: ''},
  
];

/*import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface servicos {
  servico: string;
  produto: string;
  descricao: string;
  quantidade: string;
  valor: string;
  
}

let ELEMENT_DATA: servicos[] = [
  // {servico: "", produto: "", quantidade: "", valor: ""},
  {servico: "corte", produto: "pomada modeladora alpha", descricao:"pomada modeladora efeito teia", quantidade: "2 unidades", valor: "50,00"},
  {servico: "corte", produto: "pomada modeladora alpha", descricao:"pomada modeladora efeito teia", quantidade: "2 unidades", valor: "50,00"},
  {servico: "corte", produto: "pomada modeladora alpha", descricao:"pomada modeladora efeito teia", quantidade: "2 unidades", valor: "50,00"},
  {servico: "corte", produto: "pomada modeladora alpha", descricao:"pomada modeladora efeito teia", quantidade: "2 unidades", valor: "50,00"},
  {servico: "corte", produto: "pomada modeladora alpha", descricao:"pomada modeladora efeito teia", quantidade: "2 unidades", valor: "50,00"},
  {servico: "corte", produto: "pomada modeladora alpha", descricao:"pomada modeladora efeito teia", quantidade: "2 unidades", valor: "50,00"},
  {servico: "corte", produto: "pomada modeladora alpha", descricao:"pomada modeladora efeito teia", quantidade: "2 unidades", valor: "50,00"},

];

@Component({
  selector: 'exebicao-servicos',
  templateUrl: './exebicao-servicos.component.html',
  styleUrls: ['./exebicao-servicos.component.scss']
})
export class ExebicaoServicosComponent implements OnInit, AfterViewInit  {
  displayedColumns: string[] = ['servico', 'produto', 'descricao', 'quantidade','valor'];
  dataSource = new MatTableDataSource<servicos>(ELEMENT_DATA);
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


}
*/
