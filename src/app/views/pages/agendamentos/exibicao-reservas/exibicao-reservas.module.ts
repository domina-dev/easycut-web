import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExibicaoReservasRoutingModule } from './exibicao-reservas-routing.module';
import { ExibicaoReservasComponent } from './exibicao-reservas.component';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { LibVexModule } from 'src/app/core/modules/lib-vex.module';
import { GradeReservasComponent } from './grade-reservas/grade-reservas.component';

@NgModule({
    declarations: [ExibicaoReservasComponent, GradeReservasComponent],
    imports: [
        CommonModule,
        ExibicaoReservasRoutingModule,
        MaterialModule,
        LibVexModule
    ],
    exports: [ExibicaoReservasComponent]
})
export class ExibicaoReservasModule {}
