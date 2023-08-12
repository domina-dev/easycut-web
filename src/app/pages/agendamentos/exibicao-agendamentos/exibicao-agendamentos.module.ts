import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExibicaoAgendamentosRoutingModule } from './exibicao-agendamentos-routing.module';
import { ExibicaoAgendamentosComponent } from './exibicao-agendamentos.component';
import { MaterialModule } from 'src/app/modules/material.module';
import { LibVexModule } from 'src/app/modules/lib-vex.module';

@NgModule({
    declarations: [ExibicaoAgendamentosComponent],
    imports: [
        CommonModule,
        ExibicaoAgendamentosRoutingModule,
        MaterialModule,
        LibVexModule
    ],
    exports: [ExibicaoAgendamentosComponent]
})
export class ExibicaoAgendamentosModule {}
