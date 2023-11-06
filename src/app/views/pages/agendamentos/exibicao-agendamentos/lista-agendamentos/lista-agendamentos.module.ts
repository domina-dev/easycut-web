import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaAgendamentosComponent } from './lista-agendamentos.component';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { LibVexModule } from 'src/app/core/modules/lib-vex.module';



@NgModule({
  declarations: [
    ListaAgendamentosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LibVexModule
  ],
  exports: [ListaAgendamentosComponent]
})
export class ListaAgendamentosModule { }
