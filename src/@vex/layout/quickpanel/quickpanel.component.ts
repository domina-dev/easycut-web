import { AgendamentoService } from './../../../app/services/agendamentos/agendamentos.service';
import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';
import { Agendamento } from 'src/app/model/agendamento';


@Component({
    selector: 'vex-quickpanel',
    templateUrl: './quickpanel.component.html',
    styleUrls: ['./quickpanel.component.scss']
})
export class QuickpanelComponent implements OnInit{
    date = DateTime.local().toFormat('DD');
    dayName = DateTime.local().toFormat('EEEE');

    listaAgendamentos: Agendamento[] = []

    horaAgendamento = this.listaAgendamentos['dtAtendimento']

    constructor (private agendamentoService: AgendamentoService) { }

    ngOnInit(): void {
      this.getAgendamentosDia()
    }

    getAgendamentosDia() {
      this.agendamentoService.getAgendamentos().subscribe(response => {
        this.listaAgendamentos = response;
        this.horaAgendamento = this.listaAgendamentos.map((agendamento) =>
        DateTime.fromISO(agendamento.dtAtendimento).toFormat('HH:mm')
        );
        console.log(this.horaAgendamento)
      },
        (error) => { console.log(error)});
    }
}
