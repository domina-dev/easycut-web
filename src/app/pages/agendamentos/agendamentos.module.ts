import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendamentosRoutingModule } from './agendamentos-routing.module';
import { AgendamentosComponent } from './agendamentos.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ExibicaoAgendamentosModule } from './exibicao-agendamentos/exibicao-agendamentos.module';
import { ExibicaoReservasModule } from './exibicao-reservas/exibicao-reservas.module';
import { PageLayoutModule } from '../../../@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [AgendamentosComponent],
    imports: [
        CommonModule,
        AgendamentosRoutingModule,
        MatTabsModule,
        ExibicaoAgendamentosModule,
        ExibicaoReservasModule,
        PageLayoutModule,
        FlexLayoutModule
    ]
})
export class AgendamentosModule {}
