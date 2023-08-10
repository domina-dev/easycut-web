import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExibicaoServicosRoutingModule } from './exibicao-servicos-routing.module';
import { ExibicaoServicosComponent } from './exibicao-servicos.component';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    ExibicaoServicosComponent
  ],
  imports: [
    CommonModule,
    ExibicaoServicosRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule
  ],
  exports: [ExibicaoServicosComponent]
})
export class ExibicaoServicosModule { }
