import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExebicaoPromocoesRoutingModule } from './exebicao-promocoes-routing.module';
import { ExebicaoPromocoesComponent } from './exebicao-promocoes.component';


@NgModule({
  declarations: [
    ExebicaoPromocoesComponent
  ],
  imports: [
    CommonModule,
    ExebicaoPromocoesRoutingModule
  ]
})
export class ExebicaoPromocoesModule { }
