import { Component, OnInit, AfterViewInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Produto } from 'src/app/core/model/produto';

@Component({
  selector: 'vex-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss']
})
export class ListaProdutosComponent implements AfterViewInit, OnInit {

  @Input() listaProdutos: Produto[];
  @Input() dataSource: MatTableDataSource<Produto>;
  @Input() displayedColumns: string[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Output() eventModalCadastrarEditar: EventEmitter<any> = new EventEmitter();
  @Output() eventModalDeletar: EventEmitter<any> = new EventEmitter();
  @Output() eventModalOcultar: EventEmitter<any> = new EventEmitter();
  @Output() eventModalPromocional: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  abrirModalCadastrarEditar(produto: Produto) {
    this.eventModalCadastrarEditar.emit({ produto: produto })
  }

  abrirModalDeletar(produto: Produto) {
    this.eventModalDeletar.emit({ produto: produto })
  }

  abrirModalOcultar(produto: Produto) {
    this.eventModalOcultar.emit({ produto: produto })
  }

  abrirModalPromocional(produto: Produto) {
    this.eventModalPromocional.emit({ produto: produto })
  }
}
