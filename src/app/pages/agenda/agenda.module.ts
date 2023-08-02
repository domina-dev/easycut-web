import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaComponent } from './agenda.component';


@NgModule({
  declarations: [
    AgendaComponent
  ],
  imports: [
    CommonModule,
    AgendaRoutingModule
  ]
})
export class AgendaModule { }
