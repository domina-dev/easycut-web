import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExibicaoServicosRoutingModule } from './exibicao-servicos-routing.module';
import { ExibicaoServicosComponent } from './exibicao-servicos.component';


@NgModule({
  declarations: [
    ExibicaoServicosComponent
  ],
  imports: [
    CommonModule,
    ExibicaoServicosRoutingModule
  ],
  exports: [ExibicaoServicosComponent]
})
export class ExibicaoServicosModule { }
