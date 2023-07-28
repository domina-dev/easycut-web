import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'vex-tabela-reservas',
  templateUrl: './tabela-reservas.component.html',
  styleUrls: ['./tabela-reservas.component.scss']
})
export class TabelaReservasComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(){
  }


  displayedColumns: string[] = ['cliente', 'produto', 'quantidade', 'valor', 'dtRetirada', 'status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
}

export interface PeriodicElement {
  produto: string;
  cliente: string;
  quantidade: string;
  valor: string;
  dtRetirada: string;

}


const ELEMENT_DATA: PeriodicElement[] = [
  {cliente: 'João Batista Soares', produto: 'Pomada modeladora Blackpool', quantidade: '2 unidades', valor: 'R$ 50,00', dtRetirada: '30/06/2021'},
  {cliente: 'João Batista Soares', produto: 'Pomada modeladora Blackpool', quantidade: '2 unidades', valor: 'R$ 50,00', dtRetirada: '30/06/2021'},
  {cliente: 'João Batista Soares', produto: 'Pomada modeladora Blackpool', quantidade: '2 unidades', valor: 'R$ 50,00', dtRetirada: '30/06/2021'},
  {cliente: 'João Batista Soares', produto: 'Pomada modeladora Blackpool', quantidade: '2 unidades', valor: 'R$ 50,00', dtRetirada: '30/06/2021'},
  {cliente: 'João Batista Soares', produto: 'Pomada modeladora Blackpool', quantidade: '2 unidades', valor: 'R$ 50,00', dtRetirada: '30/06/2021'},
  {cliente: 'João Batista Soares', produto: 'Pomada modeladora Blackpool', quantidade: '2 unidades', valor: 'R$ 50,00', dtRetirada: '30/06/2021'},
  {cliente: 'João Batista Soares', produto: 'Pomada modeladora Blackpool', quantidade: '2 unidades', valor: 'R$ 50,00', dtRetirada: '30/06/2021'}

];
