import { AgendamentoService } from './../../../app/core/services/agendamentos/agendamentos.service';
import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';
import { Agendamento } from 'src/app/core/model/agendamento';
import { EventEmitterService } from 'src/app/core/services/event.service';


@Component({
    selector: 'vex-quickpanel',
    templateUrl: './quickpanel.component.html',
    styleUrls: ['./quickpanel.component.scss']
})
export class QuickpanelComponent implements OnInit{
    date = DateTime.local().toFormat('DD');
    dayName = DateTime.local().toFormat('EEEE');

    listaAgendamentos: Agendamento[] = [];
    agendamento: Agendamento[] = []

    constructor (private agendamentoService: AgendamentoService) { }

    ngOnInit(): void {
      EventEmitterService.get("buscarAgendamentosDoDia").subscribe(()=> this.getAgendamentosDia())
    }

    getAgendamentosDia() {
      this.agendamentoService.getAgendamentosDia().subscribe(response => {
        this.listaAgendamentos = response;
        console.log(response)
      },
        (error) => { console.log(error)});
    }

    mostraAgendamento(): void {
      this.agendamentoService.getAgendamentos().subscribe(respose => {
        this.agendamento = respose;
      });
      console.log(this.agendamento)
    }
}
