import { Component, OnInit } from '@angular/core';
const AGENDAMENTOS = "Meus Agendamentos"
const RESERVAS = "Minhas Reservas"

@Component({
  selector: 'agendamentos',
  templateUrl: './agendamentos.component.html',
  styleUrls: ['./agendamentos.component.scss']
})
export class AgendamentosComponent implements OnInit {
  legenda: string = AGENDAMENTOS

  constructor() { }

  ngOnInit(): void {
  }

  trocaLegenda($event) {
    this.legenda = $event.index == 0 ? AGENDAMENTOS : RESERVAS

  }

}
