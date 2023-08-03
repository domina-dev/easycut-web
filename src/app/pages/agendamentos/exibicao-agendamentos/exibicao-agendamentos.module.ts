import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExibicaoAgendamentosRoutingModule } from './exibicao-agendamentos-routing.module';
import { ExibicaoAgendamentosComponent } from './exibicao-agendamentos.component';


@NgModule({
  declarations: [
    ExibicaoAgendamentosComponent
  ],
  imports: [
    CommonModule,
    ExibicaoAgendamentosRoutingModule
  ],
  exports: [
    ExibicaoAgendamentosComponent
  ]
})
export class ExibicaoAgendamentosModule { }
