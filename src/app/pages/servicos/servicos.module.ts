import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { ServicosRoutingModule } from './servicos-routing.module';
import { ServicosComponent } from './servicos.component';
import { ExebicaoServicosModule } from './exebicao-servicos/exebicao-servicos.module';
import { ExebicaoProdutosModule } from './exebicao-produtos/exebicao-produtos.module';
import { ExebicaoPromocoesModule } from './exebicao-promocoes/exebicao-promocoes.module';


@NgModule({
  declarations: [
    ServicosComponent
  ],
  imports: [
    CommonModule,
    ServicosRoutingModule,
    MatTabsModule,
    ExebicaoServicosModule,
    ExebicaoProdutosModule,
    ExebicaoPromocoesModule
  ]
})
export class ServicosModule { }

