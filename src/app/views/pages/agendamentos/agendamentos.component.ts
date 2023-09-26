import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginModalComponent } from 'src/app/views/modais/primeiro-login/login-modal/login-modal.component';
import { PlanosComponent } from 'src/app/views/modais/planos/planos-modal/planos.component';
const AGENDAMENTOS = 'Meus Agendamentos';
const RESERVAS = 'Minhas Reservas';

@Component({
  selector: "vex-agendamentos",
  templateUrl: "./agendamentos.component.html",
  styleUrls: ["./agendamentos.component.scss"],
})
export class AgendamentosComponent implements OnInit {
    legenda: string = AGENDAMENTOS;

    trocaLegenda($event) {
        this.legenda = $event.index == 0 ? AGENDAMENTOS : RESERVAS;
    }

    constructor(public dialog: MatDialog) {}

    ngOnInit(): void {
        this.openModalCadastro();
    }

    openModalCadastro() {

        const dialogRef = this.dialog.open(LoginModalComponent);

        dialogRef.afterClosed().subscribe(result => {
          this.dialog.open(PlanosComponent);
        });

    }
}
