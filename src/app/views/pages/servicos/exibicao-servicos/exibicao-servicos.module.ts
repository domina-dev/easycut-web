import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExibicaoServicosRoutingModule } from './exibicao-servicos-routing.module';
import { ExibicaoServicosComponent } from './exibicao-servicos.component';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { LibVexModule } from 'src/app/core/modules/lib-vex.module';

@NgModule({
    declarations: [ExibicaoServicosComponent],
    imports: [
        CommonModule,
        ExibicaoServicosRoutingModule,
        MaterialModule,
        LibVexModule
    ],
    exports: [ExibicaoServicosComponent]
})
export class ExibicaoServicosModule {}
