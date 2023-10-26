import { Component, OnInit } from '@angular/core';
const NOVAVENDA = 'Nova Venda';
const FLUXODECAIXA = 'Fluxo de Caixa';
const HISTORICO = 'Histórico de vendas';

@Component({
    selector: 'vex-caixa',
    templateUrl: './caixa.component.html',
    styleUrls: ['./caixa.component.scss']
})
export class CaixaComponent implements OnInit {
    legenda: string;
    tabSelected: number;

    constructor() {
        this.legenda = NOVAVENDA;
    }

    ngOnInit(): void {
        console.log('');
    }

    trocaLegenda($event) {
        this.legenda =
            $event.index == 0 ? NOVAVENDA : this.caixaOuHistorico($event);
    }

    caixaOuHistorico($event: any) {
        return $event.index == 1 ? FLUXODECAIXA : HISTORICO;
    }

    trocaTab(selecionar: any){
        this.tabSelected = selecionar.data;
    }
}
