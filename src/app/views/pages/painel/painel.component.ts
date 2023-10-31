import { Component } from '@angular/core';
const PAINEL = 'Painel';


@Component({
  selector: 'vex-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent {
  legenda: string = PAINEL;
}
