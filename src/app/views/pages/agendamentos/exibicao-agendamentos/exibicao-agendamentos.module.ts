import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExibicaoAgendamentosRoutingModule } from './exibicao-agendamentos-routing.module';
import { ExibicaoAgendamentosComponent } from './exibicao-agendamentos.component';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { LibVexModule } from 'src/app/core/modules/lib-vex.module';
import { GradeAgendamentosComponent } from '../exibicao-agendamentos/grade-agendamentos.component';

@NgModule({
    declarations: [ExibicaoAgendamentosComponent, GradeAgendamentosComponent],
    imports: [
        CommonModule,
        ExibicaoAgendamentosRoutingModule,
        MaterialModule,
        LibVexModule,
    ],
    exports: [ExibicaoAgendamentosComponent]
})
export class ExibicaoAgendamentosModule {}
