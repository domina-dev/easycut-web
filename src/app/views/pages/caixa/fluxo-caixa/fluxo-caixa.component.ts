import { FechamentoCaixaComponent } from './../../../../core/lib/components/modais/fechamento-caixa/fechamento-caixa/fechamento-caixa.component';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Venda } from 'src/app/core/model/nova-venda';
import { MatTableDataSource } from '@angular/material/table';

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

  dataSource: MatTableDataSource<Venda>;
  columnsToDisplay = ['Data', 'Cliente', 'Qtd', 'Valor'];
  // columnsToDisplay = [
  //   { thName: 'Data', attributeName: 'data' },
  //   { thName: 'Cliente', attributeName: 'cliente' },
  //   { thName: 'Qtd Item', attributeName: 'qtd' },
  //   { thName: 'Valor Total', attributeName: 'valor' }
  // ];

  expandedElement: Venda | null;

  @Output() trocaTab: EventEmitter<any> = new EventEmitter();

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Venda>(this.listaFluxoCaixa);
  }

  fecharCaixa() {
    const dialogRef = this.dialog.open(FechamentoCaixaComponent)
    dialogRef.afterClosed().subscribe()
  }

  trocarTab() {
    this.trocaTab.emit({ data: 0 });
  }

  listaFluxoCaixa: Venda[] = [
    {
      Data: '08/11/2023',
      Cliente: 'Vitor',
      Qtd: 4,
      Valor: 'R$ 24,00',
      detalhes: [
        {
          detalheNome: `cerveja`,
          detalheQtd: 4,
          detalheValor: 'R$ 24,00',
        },
      ],
    },
    {
      Data: '10/11/2023',
      Cliente: 'Vitor Algusto',
      Qtd: 2,
      Valor: 'R$ 62,00',
      detalhes: [
        {
          detalheNome: `barba`,
          detalheQtd: 1,
          detalheValor: 'R$ 32,00',
        },
        {
          detalheNome: `corte simples`,
          detalheQtd: 1,
          detalheValor: 'R$ 30,00',
        },
      ],
    },
    {
      Data: '09/11/2023',
      Cliente: 'Paulo Vitor',
      Qtd: 14,
      Valor: 'R$ 100,00',
      detalhes: [
        {
          detalheNome: `pomada`,
          detalheQtd: 1,
          detalheValor: 'R$ 20,00',
        },
        {
          detalheNome: `fixa de cinuca`,
          detalheQtd: 10,
          detalheValor: 'R$ 20,00',
        },
        {
          detalheNome: `shampoo`,
          detalheQtd: 1,
          detalheValor: 'R$ 20,00',
        },
        {
          detalheNome: `corte infantil`,
          detalheQtd: 2,
          detalheValor: 'R$ 40,00',
        },
      ],
    },
    {
      Data: '10/11/2023',
      Cliente: 'Vitor Thales',
      Qtd: 11,
      Valor: 'R$ 240,00',
      detalhes: [
        {
          detalheNome: `completo casamento`,
          detalheQtd: 1,
          detalheValor: 'R$ 180,00',
        },
        {
          detalheNome: `cerveja`,
          detalheQtd: 10,
          detalheValor: 'R$ 60,00',
        },
      ],
    },
    {
      Data: '10/11/2023',
      Cliente: 'Vitor Raimundo',
      Qtd: 4,
      Valor: 'R$ 36,00',
      detalhes: [
        {
          detalheNome: `fixa sinuca`,
          detalheQtd: 3,
          detalheValor: 'R$ 6,00',
        },
        {
          detalheNome: `corte simples`,
          detalheQtd: 1,
          detalheValor: 'R$ 30,00',
        },
      ],
    },
  ];

}



// export interface PeriodicElement {
//   Data: string;
//   Cliente: string;
//   Qtd: number;
//   Valor: string;
//   detalheNome: string;
//   detalheQtd: string;
//   detalheValor: string;
//   // detalhes: Detalhe[];
// }
// const ELEMENT_DATA: PeriodicElement[] = [
//   {
//     Data: '08/11/2023',
//     Cliente: 'Vitor',
//     Qtd: 8,
//     Valor: 'R$ 24,00',
//     detalheNome: `cerveja`,
//     detalheQtd: `2Uni`,
//     detalheValor: `R$ 12,00`,
//   },
//   {
//     Data: '08/11/2023',
//     Cliente: 'Vitor Golçalves',
//     Qtd: 8,
//     Valor: 'R$ 54,00',
//     detalheNome: `cerveja`,
//     detalheQtd: `3Uni`,
//     detalheValor: `R$ 12,00`,
//   },
//   {
//     Data: '08/11/2023',
//     Cliente: 'Vitor',
//     Qtd: 8,
//     Valor: 'R$ 24,00',
//     detalheNome: `cerveja`,
//     detalheQtd: `2Uni`,
//     detalheValor: `R$ 12,00`,
//   },
//   {
//     Data: '08/11/2023',
//     Cliente: 'Vitor',
//     Qtd: 8,
//     Valor: 'R$ 24,00',
//     detalheNome: `cerveja`,
//     detalheQtd: `2Uni`,
//     detalheValor: `R$ 12,00`,
//   },
//   {
//     Data: '08/11/2023',
//     Cliente: 'Vitor Leite',
//     Qtd: 8,
//     Valor: 'R$ 24,00',
//     detalheNome: `cerveja`,
//     detalheQtd: `2Uni`,
//     detalheValor: `R$ 12,00`,
//   },

// ];
