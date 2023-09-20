import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { Servico } from 'src/app/pages/servicos/exibicao-servicos/exibicao-servicos.component';

@Component({
  selector: 'vex-izi-table',
  templateUrl: './izi-table.component.html',
  styleUrls: ['./izi-table.component.scss']
})
export class IziTableComponent implements OnInit {

  ngOnInit(): void {
    console.log("Method not implemented");
  }

  @Input() listaServicos: Servico[] = [];
  @Input() listaClientes: Cliente[] = [];

  colunas: string[] = ['nome', 'preco', 'descricao', 'tempoEstimado', 'categoria'];
}