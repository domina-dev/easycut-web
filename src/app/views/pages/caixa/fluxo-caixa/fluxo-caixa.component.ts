import { FechamentoCaixaComponent } from './../../../../core/lib/components/modais/fechamento-caixa/fechamento-caixa/fechamento-caixa.component';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'vex-fluxo-caixa',
  templateUrl: './fluxo-caixa.component.html',
  styleUrls: ['./fluxo-caixa.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class FluxoCaixaComponent implements OnInit {

  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['Data', 'Cliente', 'Qtd', 'Valor'];
  expandedElement: PeriodicElement | null;

  @Output() trocaTab: EventEmitter<any> = new EventEmitter();

  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {
    console.log('Method not implemented');
  }

  fecharCaixa() {
    const dialogRef = this.dialog.open(FechamentoCaixaComponent)
    dialogRef.afterClosed().subscribe()
  }

  trocarTab() {
    this.trocaTab.emit({ data: 0 });
  }
}

export interface PeriodicElement {
  Data: string;
  Cliente: string;
  Qtd: number;
  Valor: string;
  detalheNome: string;
  detalheQtd: string;
  detalheValor: string;
  // detalhes: Detalhe[];
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    Data: '08/11/2023',
    Cliente: 'Vitor',
    Qtd: 8,
    Valor: 'R$ 24,00',
    detalheNome: `cerveja`,
    detalheQtd: `2Uni`,
    detalheValor: `R$ 12,00`,
  },
  {
    Data: '08/11/2023',
    Cliente: 'Vitor Golçalves',
    Qtd: 8,
    Valor: 'R$ 54,00',
    detalheNome: `cerveja`,
    detalheQtd: `3Uni`,
    detalheValor: `R$ 12,00`,
  },
  {
    Data: '08/11/2023',
    Cliente: 'Vitor',
    Qtd: 8,
    Valor: 'R$ 24,00',
    detalheNome: `cerveja`,
    detalheQtd: `2Uni`,
    detalheValor: `R$ 12,00`,
  },
  {
    Data: '08/11/2023',
    Cliente: 'Vitor',
    Qtd: 8,
    Valor: 'R$ 24,00',
    detalheNome: `cerveja`,
    detalheQtd: `2Uni`,
    detalheValor: `R$ 12,00`,
  },
  {
    Data: '08/11/2023',
    Cliente: 'Vitor Leite',
    Qtd: 8,
    Valor: 'R$ 24,00',
    detalheNome: `cerveja`,
    detalheQtd: `2Uni`,
    detalheValor: `R$ 12,00`,
  },

];


// export interface Detalhe {
//   detalheNome: string;
//   detalheQtd: string;
//   detalheValor: string;
// };
