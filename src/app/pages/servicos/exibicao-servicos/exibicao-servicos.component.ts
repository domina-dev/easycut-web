import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exibicao-servicos',
  templateUrl: './exibicao-servicos.component.html',
  styleUrls: ['./exibicao-servicos.component.scss']
})
export class ExibicaoServicosComponent implements OnInit {

  verLista: boolean = true;
  verGrade: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  vizualizar(){
    this.verLista = !this.verLista
    this.verGrade = !this.verGrade
  }

}
