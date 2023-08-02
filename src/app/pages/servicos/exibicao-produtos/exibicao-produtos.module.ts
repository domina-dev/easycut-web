import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExibicaoProdutosRoutingModule } from './exibicao-produtos-routing.module';
import { ExibicaoProdutosComponent } from './exibicao-produtos.component';

// Paginação e Tabela
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

// Ícone
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ExibicaoProdutosComponent
  ],
  imports: [
    CommonModule,
    ExibicaoProdutosRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
  ],
  exports: [ExibicaoProdutosComponent]
})
export class ExibicaoProdutosModule { }
