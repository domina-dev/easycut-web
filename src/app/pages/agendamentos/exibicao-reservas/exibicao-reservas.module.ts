import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExibicaoReservasRoutingModule } from './exibicao-reservas-routing.module';
import { ExibicaoReservasComponent } from './exibicao-reservas.component';


@NgModule({
  declarations: [
    ExibicaoReservasComponent
  ],
  imports: [
    CommonModule,
    ExibicaoReservasRoutingModule
  ],
  exports:[
  ExibicaoReservasComponent,
  ]
})
export class ExibicaoReservasModule { }
