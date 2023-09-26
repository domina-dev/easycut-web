import { Component } from '@angular/core';

@Component({
    selector: 'vex-exibicao-promocoes',
    templateUrl: './exibicao-promocoes.component.html',
    styleUrls: ['./exibicao-promocoes.component.scss']
})

export class ExibicaoPromocoesComponent {
    exibirProdutos: boolean = false;
    exibirServicos: boolean = true;

    trocaVisualizacao(valorClicado: string){
        console.log(valorClicado);
        if(valorClicado == "produtos"){
           this.exibirProdutos=true 
           this.exibirServicos=false 
        }   
        else{
            this.exibirServicos=true 
            this.exibirProdutos=false
        }     
    }
}
