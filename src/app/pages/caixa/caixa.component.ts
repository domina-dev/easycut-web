import { Component, OnInit } from '@angular/core';
const NOVAVENDA = "Nova Venda"
const FLUXODECAIXA = "Fluxo de Caixa"
const HISTORICO = "Histórico de vendas"

@Component({
  selector: 'caixa',
  templateUrl: './caixa.component.html',
  styleUrls: ['./caixa.component.scss']
})
export class CaixaComponent implements OnInit {
  legenda: string 

  constructor() { 
    this.legenda = NOVAVENDA
  }

  ngOnInit(): void {
  }

   trocaLegenda($event) {
    this.legenda = $event.index == 0 ? NOVAVENDA : $event.index == 1 ? FLUXODECAIXA : HISTORICO

  }

}
