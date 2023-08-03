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
    this.legenda = $event.index == 0 ? SERVICOS : $event.index == 1 ? PRODUTOS : PROMOCOES
            }
  }

