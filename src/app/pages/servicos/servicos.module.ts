import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { ServicosRoutingModule } from './servicos-routing.module';
import { ServicosComponent } from './servicos.component';
import { ExebicaoServicosModule } from './exebicao-servicos/exebicao-servicos.module';
import { ExebicaoProdutosModule } from './exebicao-produtos/exebicao-produtos.module';
import { ExebicaoPromocoesModule } from './exebicao-promocoes/exebicao-promocoes.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ContainerModule } from '../../../@vex/directives/container/container.module';
import { PageLayoutModule } from "../../../@vex/components/page-layout/page-layout.module";
import { BreadcrumbsModule } from "../../../@vex/components/breadcrumbs/breadcrumbs.module";


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
        ExebicaoPromocoesModule,
        FlexLayoutModule,
        ContainerModule,
        PageLayoutModule,
        BreadcrumbsModule
    ]
})
export class ServicosModule { }

