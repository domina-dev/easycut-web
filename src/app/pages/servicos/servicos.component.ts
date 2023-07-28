import { Component, OnInit } from '@angular/core';
const SERVICOS = "Meus Serviços"
const PRODUTOS = "Meus Produtos"
const PROMOCOES = "Minhas Promoções"
@Component({
  selector: 'vex-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss'],

})
export class ServicosComponent implements OnInit {
  servicos: boolean = true
  produtos: boolean = false
  promocoes: boolean = false
  legenda: string = SERVICOS

  constructor() { }

  ngOnInit(): void {
  }

  trocaLegenda($event) {
    switch ($event.index) {
      case 0:
        this.servicos = true
        this.produtos = false
        this.promocoes = false
        this.legenda = SERVICOS
        break;
      case 1:
        this.servicos = false
        this.produtos = true
        this.promocoes = false
        this.legenda = PRODUTOS
        break;
      case 2:
        this.servicos = false
        this.produtos = false
        this.promocoes = true
        this.legenda = PROMOCOES
        break;

      default:
        this.servicos = true
        this.produtos = false
        this.promocoes = false
        this.legenda = SERVICOS
        break;
    }
  }
}

