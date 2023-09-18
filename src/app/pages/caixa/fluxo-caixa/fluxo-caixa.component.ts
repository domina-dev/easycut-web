import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'vex-fluxo-caixa',
    templateUrl: './fluxo-caixa.component.html',
    styleUrls: ['./fluxo-caixa.component.scss']
})
export class FluxoCaixaComponent implements OnInit {
    displayedColumns = ['data', 'descricao', 'status', 'valor'];
    dataSource = ELEMENT_DATA;

    ngOnInit(): void {
        console.log('Method not implemented');
    }
}

export interface FluxoCaixa {
    descricao: string;
    data: string;
    status: string;
    valor: string;
}

const ELEMENT_DATA: FluxoCaixa[] = [
    {data: '01/07/2021', descricao: 'Corte simples', status: 'Confirmado', valor: 'R$ 30,00'},
    {data: '01/07/2021', descricao: 'Pomada modeladora BLACKPOOL (2x)', status: 'Confirmado', valor: 'R$ 30,00'},
    {data: '02/07/2021', descricao: 'Platinado masculino', status: 'Reservado', valor: 'R$ 90,00'},
    {data: '02/07/2021', descricao: 'Barba + Corte', status: 'Reservado', valor: 'R$ 90,00'},
    {data: '03/07/2021', descricao: 'Coloração capilar', status: 'Cancelado', valor: 'R$ 90,00'},
    {data: '04/07/2021', descricao: 'Depilação laser', status: 'Cancelado', valor: 'R$ 90,00'},
    {data: '07/07/2021', descricao: 'Gel de cabelo EXTRA (1x)', status: 'Confirmado', valor: 'R$ 90,00'},
    {data: '03/07/2021', descricao: 'Coloração capilar', status: 'Cancelado', valor: 'R$ 90,00'},
    {data: '04/07/2021', descricao: 'Depilação laser', status: 'Cancelado', valor: 'R$ 90,00'},
    {data: '07/07/2021', descricao: 'Gel de cabelo EXTRA (1x)', status: 'Confirmado', valor: 'R$ 90,00'},
];