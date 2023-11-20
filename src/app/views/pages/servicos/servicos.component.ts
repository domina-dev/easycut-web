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
    tabPromocional: boolean

    trocaLegenda($event) {
        
        if($event.index == 0){
            this.tabPromocional = false
            this.legenda = SERVICOS
        } 
        else if($event.index == 1){
            this.tabPromocional = false
            this.legenda = PRODUTOS
        }
        else{
            this.tabPromocional = true
            this.legenda = PROMOCOES
        }
    }

}
