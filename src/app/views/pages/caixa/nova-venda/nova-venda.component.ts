import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'vex-nova-venda',
    templateUrl: './nova-venda.component.html',
    styleUrls: ['./nova-venda.component.scss']
})
export class NovaVendaComponent implements OnInit {

  favoriteSeason: string;
  seasons: string[] = ['Serviços', 'Produtos'];
  servicos: boolean;


  if (_favoriteSeason = 'Serviços') {
this.servicos = true
  };

    ngOnInit(): void {
        console.log('Method not implemented');
    }
}
