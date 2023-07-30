import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExibicaoProdutosRoutingModule } from './exibicao-produtos-routing.module';
import { ExibicaoProdutosComponent } from './exibicao-produtos.component';


@NgModule({
  declarations: [
    ExibicaoProdutosComponent
  ],
  imports: [
    CommonModule,
    ExibicaoProdutosRoutingModule
  ],
  exports: [ExibicaoProdutosComponent]
})
export class ExibicaoProdutosModule { }
