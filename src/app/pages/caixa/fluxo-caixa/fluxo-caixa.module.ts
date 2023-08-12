import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FluxoCaixaRoutingModule } from './fluxo-caixa-routing.module';
import { FluxoCaixaComponent } from './fluxo-caixa.component';


@NgModule({
  declarations: [
    FluxoCaixaComponent
  ],
  imports: [
    CommonModule,
    FluxoCaixaRoutingModule
  ],
  exports:[
   FluxoCaixaComponent
  ]
})
export class FluxoCaixaModule { }
