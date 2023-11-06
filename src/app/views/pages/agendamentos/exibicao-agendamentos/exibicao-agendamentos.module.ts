import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExibicaoAgendamentosRoutingModule } from './exibicao-agendamentos-routing.module';
import { ExibicaoAgendamentosComponent } from './exibicao-agendamentos.component';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { LibVexModule } from 'src/app/core/modules/lib-vex.module';
import { GradeAgendamentosComponent } from './grade-agendamentos/grade-agendamentos.component';
import { GradeAgendamentosModule } from './grade-agendamentos/grade-agendamentos.module';
import { ListaAgendamentosModule } from './lista-agendamentos/lista-agendamentos.module';
import { CardModule } from 'src/app/core/lib/shared/card/card.module';

@NgModule({
    declarations: [ExibicaoAgendamentosComponent, GradeAgendamentosComponent],
    imports: [
        CommonModule,
        ExibicaoAgendamentosRoutingModule,
        MaterialModule,
        LibVexModule,
        GradeAgendamentosModule,
        ListaAgendamentosModule,
        CardModule
    ],
    exports: [ExibicaoAgendamentosComponent]
})
export class ExibicaoAgendamentosModule {}
