import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { ServicosRoutingModule } from './servicos-routing.module';
import { ServicosComponent } from './servicos.component';
import { ExibicaoServicosModule } from './exibicao-servicos/exibicao-servicos.module';
import { ExibicaoProdutosModule } from './exibicao-produtos/exibicao-produtos.module';
import { ExibicaoPromocoesModule } from './exibicao-promocoes/exibicao-promocoes.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ContainerModule } from '../../../@vex/directives/container/container.module';
import { PageLayoutModule } from '../../../@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from '../../../@vex/components/breadcrumbs/breadcrumbs.module';

@NgModule({
    declarations: [ServicosComponent],
    imports: [
        CommonModule,
        ServicosRoutingModule,
        MatTabsModule,
        ExibicaoServicosModule,
        ExibicaoProdutosModule,
        ExibicaoPromocoesModule,
        FlexLayoutModule,
        ContainerModule,
        PageLayoutModule,
        BreadcrumbsModule
    ]
})
export class ServicosModule {}
