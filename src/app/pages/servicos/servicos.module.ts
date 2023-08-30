import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ServicosRoutingModule } from './servicos-routing.module';
import { ServicosComponent } from './servicos.component';
import { ExibicaoServicosModule } from './exibicao-servicos/exibicao-servicos.module';
import { ExibicaoProdutosModule } from './exibicao-produtos/exibicao-produtos.module';
import { ExibicaoPromocoesModule } from './exibicao-promocoes/exibicao-promocoes.module';
import { MaterialModule } from 'src/app/modules/material.module';
import { LibVexModule } from 'src/app/modules/lib-vex.module';

@NgModule({
    declarations: [ServicosComponent],
    imports: [
        CommonModule,
        ServicosRoutingModule,
        ExibicaoServicosModule,
        ExibicaoProdutosModule,
        ExibicaoPromocoesModule,
        LibVexModule,
        MaterialModule
    ]
})
export class ServicosModule {}
