import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExibicaoProdutosRoutingModule } from './exibicao-produtos-routing.module';
import { ExibicaoProdutosComponent } from './exibicao-produtos.component';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { LibVexModule } from 'src/app/core/modules/lib-vex.module';

@NgModule({
    declarations: [ExibicaoProdutosComponent],
    imports: [
        CommonModule,
        ExibicaoProdutosRoutingModule,
        MaterialModule,
        LibVexModule
    ],
    exports: [ExibicaoProdutosComponent]
})
export class ExibicaoProdutosModule {}
