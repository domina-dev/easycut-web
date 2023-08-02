import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExibicaoReservasRoutingModule } from './exibicao-reservas-routing.module';
import { ExibicaoReservasComponent } from './exibicao-reservas.component';
import { MatTableModule } from '@angular/material/table';




@NgModule({
  declarations: [
    ExibicaoReservasComponent
  ],
  imports: [
    CommonModule,
    ExibicaoReservasRoutingModule,
    MatTableModule
  ],
  exports:[
  ExibicaoReservasComponent,
  ]
})
export class ExibicaoReservasModule { }
