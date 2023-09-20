import { AgendamentoService } from './../../../app/services/agendamentos/agendamentos.service';
import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';
import { Agendamento } from 'src/app/model/agendamento';
import { EventEmitterService } from 'src/app/services/event.service';


@Component({
    selector: 'vex-quickpanel',
    templateUrl: './quickpanel.component.html',
    styleUrls: ['./quickpanel.component.scss']
})
export class QuickpanelComponent implements OnInit{
    date = DateTime.local().toFormat('DD');
    dayName = DateTime.local().toFormat('EEEE');

    listaAgendamentos: Agendamento[] = []

    constructor (private agendamentoService: AgendamentoService) { }

    ngOnInit(): void {
      EventEmitterService.get("buscarAgendamentosDoDia").subscribe(()=> this.getAgendamentosDia())
    }

    getAgendamentosDia() {
      this.agendamentoService.getAgendamentosDia().subscribe(response => {
        this.listaAgendamentos = response;
      },
        (error) => { console.log(error)});
    }
}
