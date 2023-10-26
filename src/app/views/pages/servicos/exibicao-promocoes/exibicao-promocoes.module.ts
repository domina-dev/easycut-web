import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ExibicaoPromocoesRoutingModule } from './exibicao-promocoes-routing.module';
import { ExibicaoPromocoesComponent } from './exibicao-promocoes.component';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { ExibicaoServicosModule } from '../exibicao-servicos/exibicao-servicos.module';
import { ExibicaoProdutosModule } from '../exibicao-produtos/exibicao-produtos.module';
import { GradePromocoesComponent } from './grade-promocoes/grade-promocoes.component';


@NgModule({
    declarations: [ExibicaoPromocoesComponent, GradePromocoesComponent],
    imports: [CommonModule, ExibicaoPromocoesRoutingModule,MaterialModule,ExibicaoServicosModule,ExibicaoProdutosModule],
    exports: [ExibicaoPromocoesComponent]
})
export class ExibicaoPromocoesModule {}
