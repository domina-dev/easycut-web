import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import icAttachMoney from '@iconify/icons-ic/attach-money';
import icBorderColor from '@iconify/icons-ic/border-color';
import icAccessTime from '@iconify/icons-ic/access-time';
import icDelete from '@iconify/icons-ic/delete';

@Component({
  selector: 'vex-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() item: any;

  @Output() eventModalCadastrarEditar: EventEmitter<any> = new EventEmitter();
  @Output() eventModalDeletar: EventEmitter<any> = new EventEmitter();
  @Output() eventModalOcultar: EventEmitter<any> = new EventEmitter();
  @Output() eventModalPromocional: EventEmitter<any> = new EventEmitter();

  icAccessTime = icAccessTime;
  icAttachMoney = icAttachMoney;
  icBorderColor = icBorderColor;

  icDelete = icDelete;

  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }

  abrirModalCadastrarEditar() {
    this.eventModalCadastrarEditar.emit({ agendamento: this.item, produto: this.item })
  }

  abrirModalDeletar() {
    this.eventModalDeletar.emit({ agendamento: this.item, produto: this.item })
  }

  abrirModalOcultar() {
    this.eventModalOcultar.emit({ produto: this.item })
  }

  abrirModalPromocional() {
    this.eventModalPromocional.emit({ produto: this.item })
  }

}
