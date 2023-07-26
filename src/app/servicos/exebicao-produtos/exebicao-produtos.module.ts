import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExebicaoProdutosRoutingModule } from './exebicao-produtos-routing.module';
import { ExebicaoProdutosComponent } from './exebicao-produtos/exebicao-produtos.component';


@NgModule({
  declarations: [
    ExebicaoProdutosComponent
  ],
  imports: [
    CommonModule,
    ExebicaoProdutosRoutingModule
  ]
})
export class ExebicaoProdutosModule { }
