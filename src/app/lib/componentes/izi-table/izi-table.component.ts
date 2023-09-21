import { Component, Input, OnInit } from '@angular/core';
import { Agendamento } from 'src/app/model/agendamento';
import { Cliente } from 'src/app/model/cliente';
import { Estabelecimento } from 'src/app/model/estabelecimento';
import { Produto } from 'src/app/model/produto';
import { Reserva } from 'src/app/model/reservas';
import { Servico } from 'src/app/pages/servicos/exibicao-servicos/exibicao-servicos.component';

@Component({
  selector: 'vex-izi-table',
  templateUrl: './izi-table.component.html',
  styleUrls: ['./izi-table.component.scss']
})
export class IziTableComponent implements OnInit {

  ngOnInit(): void {
    console.log("Method not implemented")
  }

  @Input() listaAgendamentos: Agendamento[] = [];
  @Input() listaClientes: Cliente[] = [];
  @Input() listaEstabelecimentos: Estabelecimento[] = [];
  @Input() listaProdutos: Produto[] = [];
  @Input() listaReservas: Reserva[] = [];
  @Input() listaServicos: Servico[] = [];

  colunas: string[] = ['']
}
