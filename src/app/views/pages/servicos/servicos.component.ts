import { Component } from '@angular/core';
const SERVICOS = 'Meus Serviços';
const PRODUTOS = 'Meus Produtos';
const PROMOCOES = 'Minhas Promoções';
@Component({
    selector: 'vex-servicos',
    templateUrl: './servicos.component.html',
    styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent {
    servicos: boolean = true;
    produtos: boolean = false;
    promocoes: boolean = false;
    legenda: string = SERVICOS;

    trocaLegenda($event) {
        this.legenda =
            $event.index == 0 ? SERVICOS : this.produtoOuPromocao($event);
    }

    private produtoOuPromocao($event: any): string {
        return $event.index == 1 ? PRODUTOS : PROMOCOES;
    }
}
