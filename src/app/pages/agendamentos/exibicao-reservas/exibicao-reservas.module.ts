import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExibicaoReservasRoutingModule } from './exibicao-reservas-routing.module';
import { ExibicaoReservasComponent } from './exibicao-reservas.component';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';





@NgModule({
  declarations: [
    ExibicaoReservasComponent
  ],
  imports: [
    CommonModule,
    ExibicaoReservasRoutingModule,
    MatTableModule,
    MatSelectModule
  ],
  exports:[
  ExibicaoReservasComponent,
  ]
})
export class ExibicaoReservasModule { }
