import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendamentosRoutingModule } from './agendamentos-routing.module';
import { AgendamentosComponent } from './agendamentos.component';
import { ExibicaoAgendamentosModule } from './exibicao-agendamentos/exibicao-agendamentos.module';
import { ExibicaoReservasModule } from './exibicao-reservas/exibicao-reservas.module';
import { MaterialModule } from 'src/app/modules/material.module';
import { LibVexModule } from 'src/app/modules/lib-vex.module';

@NgModule({
    declarations: [AgendamentosComponent],
    imports: [
        CommonModule,
        AgendamentosRoutingModule,
        ExibicaoAgendamentosModule,
        ExibicaoReservasModule,
        MaterialModule,
        LibVexModule
    ]
})
export class AgendamentosModule {}
