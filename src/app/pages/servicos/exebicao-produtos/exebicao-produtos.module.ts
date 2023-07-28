import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExebicaoProdutosRoutingModule } from './exebicao-produtos-routing.module';
import { ExebicaoProdutosComponent } from './exebicao-produtos.component';

// Paginação e Tabela
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

// Ícone
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ExebicaoProdutosComponent
  ],
  imports: [
    CommonModule,
    ExebicaoProdutosRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
  ],
  exports: [ExebicaoProdutosComponent]
})
export class ExebicaoProdutosModule { }
