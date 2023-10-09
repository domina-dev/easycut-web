import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'vex-confirmacao',
    templateUrl: './confirmacao.component.html',
    styleUrls: ['./confirmacao.component.scss']
})

export class ConfirmacaoComponent {

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: {itens: string[], legendaAcao: string}
  ) {
  }
}
