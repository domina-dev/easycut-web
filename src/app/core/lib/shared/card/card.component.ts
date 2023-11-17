import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import icAttachMoney from '@iconify/icons-ic/attach-money';
import icBorderColor from '@iconify/icons-ic/border-color';
import icAccessTime from '@iconify/icons-ic/access-time';
import icDelete from '@iconify/icons-ic/delete';
import { Servico } from 'src/app/core/model/servicos';

@Component({
  selector: 'vex-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() listaServicos: Servico[];
  @Input() item: any;

  @Output() eventModalCadastrarEditar: EventEmitter<any> = new EventEmitter();
  @Output() eventModalDeletar: EventEmitter<any> = new EventEmitter();
  @Output() eventModalOcultar: EventEmitter<any> = new EventEmitter();
  @Output() eventModalPromocional: EventEmitter<any> = new EventEmitter();

  icAccessTime = icAccessTime;
  icAttachMoney = icAttachMoney;
  icBorderColor = icBorderColor;
  icDelete = icDelete;

  constructor() {}

  ngOnInit() {}

  abrirModalCadastrarEditar() {
    this.eventModalCadastrarEditar.emit({ agendamento: this.item, servico: this.item })
  }

  abrirModalDeletar() {
    this.eventModalDeletar.emit({ agendamento: this.item, servico: this.item })
  }

  abrirModalOcultar() {
    this.eventModalOcultar.emit({ servico: this.item })
  }

  abrirModalPromocional() {
    this.eventModalPromocional.emit({ servico: this.item })
  }

}
