import { Component, EventEmitter, Input, Output } from '@angular/core';
import { fadeInRight400ms } from 'src/@vex/animations/fade-in-right.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { scaleIn400ms } from 'src/@vex/animations/scale-in.animation';
import { stagger40ms } from 'src/@vex/animations/stagger.animation';
import { Agendamento } from 'src/app/core/model/agendamento';
import { scaleFadeIn400ms } from 'src/@vex/animations/scale-fade-in.animation';

@Component({
  selector: 'vex-grade-agendamentos',
  templateUrl: './grade-agendamentos.component.html',
  styleUrls: ['./grade-agendamentos.component.scss'],
  animations: [
    scaleIn400ms,
    fadeInRight400ms,
    stagger40ms,
    fadeInUp400ms,
    scaleFadeIn400ms
  ]
})
export class GradeAgendamentosComponent {
  
  @Input() listaAgendamentos: any[];
  
  @Output() eventModalCadastrarEditar: EventEmitter<any> = new EventEmitter();
  @Output() eventModalDeletar: EventEmitter<any> = new EventEmitter();

  abrirModalCadastrarEditar(agendamento: Agendamento) {
    this.eventModalCadastrarEditar.emit({ agendamento: agendamento })
  }

  abrirModalDeletar(agendamento: Agendamento) {
    this.eventModalDeletar.emit({ agendamento: agendamento })
  }

}
