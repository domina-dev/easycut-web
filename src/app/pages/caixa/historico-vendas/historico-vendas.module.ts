import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoricoVendasRoutingModule } from './historico-vendas-routing.module';
import { HistoricoVendasComponent } from './historico-vendas.component';


@NgModule({
  declarations: [
    HistoricoVendasComponent
  ],
  imports: [
    CommonModule,
    HistoricoVendasRoutingModule
  ],
  exports:[
    HistoricoVendasComponent
   ],
})
export class HistoricoVendasModule { }
