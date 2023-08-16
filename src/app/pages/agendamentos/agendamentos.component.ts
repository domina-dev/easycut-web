import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginModalComponent } from 'src/app/modais/primeiro-login/login-modal/login-modal.component';
const AGENDAMENTOS = 'Meus Agendamentos';
const RESERVAS = 'Minhas Reservas';

@Component({
    selector: 'vex-agendamentos',
    templateUrl: './agendamentos.component.html',
    styleUrls: ['./agendamentos.component.scss']
})
export class AgendamentosComponent {
    legenda: string = AGENDAMENTOS;

    trocaLegenda($event) {
        this.legenda = $event.index == 0 ? AGENDAMENTOS : RESERVAS;
    }

    constructor(public dialog: MatDialog){}

    ngOnInit(): void{
        this.openModalCadastro();
    }

    openModalCadastro() {
        const modal = this.dialog.open(LoginModalComponent);
      }
}
