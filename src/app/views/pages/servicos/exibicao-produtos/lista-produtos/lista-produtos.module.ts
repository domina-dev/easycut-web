import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProdutosComponent } from './lista-produtos.component';
import { MaterialModule } from './../../../../../core/modules/material.module';
import { LibVexModule } from './../../../../../core/modules/lib-vex.module';



@NgModule({
  declarations: [
    ListaProdutosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LibVexModule
  ],
  exports: [ListaProdutosComponent]
})
export class ListaProdutosModule { }
