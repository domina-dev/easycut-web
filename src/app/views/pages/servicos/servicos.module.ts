import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ServicosRoutingModule } from './servicos-routing.module';
import { ServicosComponent } from './servicos.component';
import { ExibicaoServicosModule } from './exibicao-servicos/exibicao-servicos.module';
import { ExibicaoProdutosModule } from './exibicao-produtos/exibicao-produtos.module';
import { ExibicaoPromocoesModule } from './exibicao-promocoes/exibicao-promocoes.module';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { LibVexModule } from 'src/app/core/modules/lib-vex.module';
import { GradeProdutosModule } from './exibicao-produtos/grade-produtos/grade-produtos.module';
import { GradePromocoesModule } from './exibicao-promocoes/grade-promocoes/grade-promocoes.module';
import { GradeServicosModule } from './exibicao-servicos/grade-servicos/grade-servicos.module'

@NgModule({
    declarations: [ServicosComponent],
    imports: [
        CommonModule,
        ServicosRoutingModule,
        ExibicaoServicosModule,
        ExibicaoProdutosModule,
        ExibicaoPromocoesModule,
        LibVexModule,
        MaterialModule,
        GradeProdutosModule,
        GradePromocoesModule,
        GradeServicosModule
    ]
})
export class ServicosModule {}
