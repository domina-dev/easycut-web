import { Component } from '@angular/core';
const AGENDAMENTOS = 'Meus Agendamentos';
const RESERVAS = 'Minhas Reservas';

@Component({
  selector: "vex-agendamentos",
  templateUrl: "./agendamentos.component.html",
  styleUrls: ["./agendamentos.component.scss"],
})
export class AgendamentosComponent {
    legenda: string = AGENDAMENTOS;

    trocaLegenda($event) {
        this.legenda = $event.index == 0 ? AGENDAMENTOS : RESERVAS;
    }




}
