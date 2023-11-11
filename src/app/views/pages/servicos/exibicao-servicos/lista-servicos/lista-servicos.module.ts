import { LibVexModule } from './../../../../../core/modules/lib-vex.module';
import { MaterialModule } from './../../../../../core/modules/material.module';
import { ListaServicosComponent } from './lista-servicos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    ListaServicosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LibVexModule
  ],
  exports: [ListaServicosComponent]
})
export class ListaServicosModule { }
