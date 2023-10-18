import { Component } from '@angular/core';

@Component({
  selector: 'vex-fechamento-caixa',
  templateUrl: './fechamento-caixa.component.html',
  styleUrls: ['./fechamento-caixa.component.scss']
})

export class FechamentoCaixaComponent {
  displayedColumns = ['data', 'descricao', 'valor'];
  dataSource = ELEMENT_DATA;
}

export interface FechamentoCaixa {
  descricao: string;
  data: string;
  valor: string;
}

const ELEMENT_DATA: FechamentoCaixa[] = [
  {data: '01/09/2023', descricao: 'Corte simples', valor: 'R$ 30,00'},
  {data: '01/09/2023', descricao: 'Pomada modeladora BLACKPOOL (2x)', valor: 'R$ 30,00'},
  {data: '08/09/2023', descricao: 'Platinado masculino', valor: 'R$ 90,00'},
  {data: '12/09/2023', descricao: 'Barba + Corte', valor: 'R$ 90,00'},
  {data: '23/09/2023', descricao: 'Coloração capilar', valor: 'R$ 90,00'},
  {data: '27/09/2023', descricao: 'Gel de cabelo EXTRA (1x)', valor: 'R$ 90,00'},
  {data: '03/10/2023', descricao: 'Coloração capilar', valor: 'R$ 90,00'},
  {data: '14/10/2023', descricao: 'Depilação laser', valor: 'R$ 90,00'},
  {data: '27/10/2023', descricao: 'Gel de cabelo EXTRA (1x)', valor: 'R$ 90,00'},
];
