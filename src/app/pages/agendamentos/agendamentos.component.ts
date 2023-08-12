import { Component, OnInit } from '@angular/core';
import { PlanosComponent } from 'src/app/modais/planos/planos.component';
const AGENDAMENTOS = 'Meus Agendamentos';
const RESERVAS = 'Minhas Reservas';

@Component({
    selector: 'vex-agendamentos',
    templateUrl: './agendamentos.component.html',
    styleUrls: ['./agendamentos.component.scss']
})
export class AgendamentosComponent implements OnInit {
    legenda: string = AGENDAMENTOS;
    dialog: any;

    trocaLegenda($event) {
        this.legenda = $event.index == 0 ? AGENDAMENTOS : RESERVAS;
    }

    //Início Modal Planos
  ngOnInit(): void {
    this.abrirModalPlanos();
  }

  abrirModalPlanos() {
    const dialogRef = this.dialog.open(PlanosComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  // Fim Modal Planos
}
