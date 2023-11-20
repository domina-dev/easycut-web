import { Component, OnInit, AfterViewInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Servico } from 'src/app/core/model/servicos';

@Component({
  selector: 'vex-lista-servicos',
  templateUrl: './lista-servicos.component.html',
  styleUrls: ['./lista-servicos.component.scss']
})
export class ListaServicosComponent implements AfterViewInit, OnInit {

  @Input() listaServicos: Servico[];
  @Input() dataSource: MatTableDataSource<Servico>;
  @Input() displayedColumns: string[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Output() eventModalCadastrarEditar: EventEmitter<any> = new EventEmitter();
  @Output() eventModalDeletar: EventEmitter<any> = new EventEmitter();
  @Output() eventModalOcultar: EventEmitter<any> = new EventEmitter();
  @Output() eventModalPromocional: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  modalCadastrarEditar(servico: Servico) {
    this.eventModalCadastrarEditar.emit({ servico: servico })
  }

  abrirModalDeletar(servico: Servico) {
    this.eventModalDeletar.emit({ servico: servico })
  }

  abrirModalOcultar(servico: Servico) {
    this.eventModalOcultar.emit({ servico: servico })
  }

  abrirModalPromocional(servico: Servico) {
    this.eventModalPromocional.emit({ servico: servico })
  }
}
