import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExibicaoProdutosRoutingModule } from './exibicao-produtos-routing.module';
import { ExibicaoProdutosComponent } from './exibicao-produtos.component';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { LibVexModule } from 'src/app/core/modules/lib-vex.module';
import { GradeProdutosComponent } from './grade-produtos/grade-produtos.component';

@NgModule({
    declarations: [ExibicaoProdutosComponent, GradeProdutosComponent],
    imports: [
        CommonModule,
        ExibicaoProdutosRoutingModule,
        MaterialModule,
        LibVexModule
    ],
    exports: [ExibicaoProdutosComponent]
})
export class ExibicaoProdutosModule {}
