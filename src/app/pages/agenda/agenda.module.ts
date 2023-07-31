import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaComponent } from './agenda.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';


import { TabelaReservasComponent } from './tabela/tabela-reservas/tabela-reservas.component';


@NgModule({
  declarations: [
    AgendaComponent,
    TabelaReservasComponent
  ],
  imports: [
    CommonModule,
    AgendaRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule

  ]
})
export class AgendaModule { }
