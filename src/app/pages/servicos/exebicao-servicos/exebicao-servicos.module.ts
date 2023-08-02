import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExebicaoServicosRoutingModule } from './exebicao-servicos-routing.module';
import { ExebicaoServicosComponent } from './exebicao-servicos.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ExebicaoServicosComponent
  ],
  imports: [
    CommonModule,
    ExebicaoServicosRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule
  ],
  exports: [ExebicaoServicosComponent]
})
export class ExebicaoServicosModule { }
