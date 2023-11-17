import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { fadeInRight400ms } from 'src/@vex/animations/fade-in-right.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { scaleFadeIn400ms } from 'src/@vex/animations/scale-fade-in.animation';
import { scaleIn400ms } from 'src/@vex/animations/scale-in.animation';
import { stagger40ms } from 'src/@vex/animations/stagger.animation';
import { Servico } from 'src/app/core/model/servicos';


@Component({
  selector: 'vex-grade-servicos',
  templateUrl: './grade-servicos.component.html',
  styleUrls: ['./grade-servicos.component.scss'],
  animations: [
    scaleIn400ms,
    fadeInRight400ms,
    stagger40ms,
    fadeInUp400ms,
    scaleFadeIn400ms
  ]
})
export class GradeServicosComponent implements OnInit {

  @Input() listaServico: any[];

  @Output() eventModalCadastrarEditar: EventEmitter<any> = new EventEmitter();
  @Output() eventModalDeletar: EventEmitter<any> = new EventEmitter();
  @Output() eventModalOcultar: EventEmitter<any> = new EventEmitter();
  @Output() eventModalPromocional: EventEmitter<any> = new EventEmitter();

  constructor(){}

  ngOnInit(): void {
  }

  modalCadastrarEditar(servico: Servico) {
    this.eventModalCadastrarEditar.emit({ servico: servico })
  }

  abrirModalDeletar(servico: Servico) {
    this.eventModalDeletar.emit({ servico: servico })
  }

  abrirModalOcultar(servico: Servico) {
    this.eventModalOcultar.emit({ servico: servico })
  }

  abrirModalPromocional(servico: Servico) {
    this.eventModalPromocional.emit({ servico: servico })
  }
}
