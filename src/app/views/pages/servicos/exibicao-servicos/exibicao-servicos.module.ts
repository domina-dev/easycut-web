import { ListaServicosModule } from './lista-servicos/lista-servicos.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExibicaoServicosRoutingModule } from './exibicao-servicos-routing.module';
import { ExibicaoServicosComponent } from './exibicao-servicos.component';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { LibVexModule } from 'src/app/core/modules/lib-vex.module';
import { GradeServicosComponent } from './grade-servicos/grade-servicos.component';
import { GradeServicosModule } from './grade-servicos/grade-servicos.module';
import { CardModule } from 'src/app/core/lib/shared/card/card.module';

@NgModule({
    declarations: [ExibicaoServicosComponent, GradeServicosComponent],
    imports: [
        CommonModule,
        ExibicaoServicosRoutingModule,
        MaterialModule,
        LibVexModule,
        GradeServicosModule,
        ListaServicosModule,
        CardModule
    ],
    exports: [ExibicaoServicosComponent]
})
export class ExibicaoServicosModule {}
