import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExebicaoServicosRoutingModule } from './exebicao-servicos-routing.module';
import { ExebicaoServicosComponent } from './exebicao-servicos.component';


@NgModule({
  declarations: [
    ExebicaoServicosComponent
  ],
  imports: [
    CommonModule,
    ExebicaoServicosRoutingModule
  ],
  exports: [ExebicaoServicosComponent]
})
export class ExebicaoServicosModule { }
