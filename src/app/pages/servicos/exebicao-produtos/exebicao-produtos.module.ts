import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExebicaoProdutosRoutingModule } from './exebicao-produtos-routing.module';
import { ExebicaoProdutosComponent } from './exebicao-produtos.component';

// Paginação e Tabela
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    ExebicaoProdutosComponent
  ],
  imports: [
    CommonModule,
    ExebicaoProdutosRoutingModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  exports: [ExebicaoProdutosComponent]
})
export class ExebicaoProdutosModule { }
