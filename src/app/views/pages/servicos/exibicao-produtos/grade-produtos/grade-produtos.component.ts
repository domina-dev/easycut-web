import { Component, EventEmitter, Input, Output } from '@angular/core';
import { fadeInRight400ms } from 'src/@vex/animations/fade-in-right.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { scaleFadeIn400ms } from 'src/@vex/animations/scale-fade-in.animation';
import { scaleIn400ms } from 'src/@vex/animations/scale-in.animation';
import { stagger40ms } from 'src/@vex/animations/stagger.animation';
import { Produto } from 'src/app/core/model/produto';

@Component({
  selector: 'vex-grade-produtos',
  templateUrl: './grade-produtos.component.html',
  styleUrls: ['./grade-produtos.component.scss'],
  animations: [
    scaleIn400ms,
    fadeInRight400ms,
    stagger40ms,
    fadeInUp400ms,
    scaleFadeIn400ms
  ]
})
export class GradeProdutosComponent {

  @Input() listaProdutos: any[];

  @Output() eventModalCadastrarEditar: EventEmitter<any> = new EventEmitter();
  @Output() eventModalDeletar: EventEmitter<any> = new EventEmitter();
  @Output() eventModalPromocional: EventEmitter<any> = new EventEmitter();
  @Output() eventModalOcultar: EventEmitter<any> = new EventEmitter();

  constructor(){}

  abrirModalCadastrarEditar(produto: Produto) {
    this.eventModalCadastrarEditar.emit({ produto: produto })
  }

  abrirModalDeletar(produto: Produto) {
    this.eventModalDeletar.emit({ produto: produto })
  }

  abrirModalOcultar(produto: Produto) {
    this.eventModalPromocional.emit({ produto: produto })
  }

  abrirModalPromocional(produto: Produto) {
    this.eventModalPromocional.emit({ produto: produto })
  }

}
