import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendamentosRoutingModule } from './agendamentos-routing.module';
import { AgendamentosComponent } from './agendamentos.component';
import { ExibicaoAgendamentosModule } from './exibicao-agendamentos/exibicao-agendamentos.module';
import { ExibicaoReservasModule } from './exibicao-reservas/exibicao-reservas.module';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { LibVexModule } from 'src/app/core/modules/lib-vex.module';
import { GradeAgendamentosModule } from 'src/app/views/pages/agendamentos/exibicao-agendamentos/grade-agendamentos/grade-agendamentos.module';
import { GradeReservasModule } from './exibicao-reservas/grade-reservas/grade-reservas.module'

@NgModule({
    declarations: [AgendamentosComponent],
    imports: [
        CommonModule,
        AgendamentosRoutingModule,
        ExibicaoAgendamentosModule,
        ExibicaoReservasModule,
        MaterialModule,
        LibVexModule,
        GradeAgendamentosModule,
        GradeReservasModule
    ]
})
export class AgendamentosModule {}
