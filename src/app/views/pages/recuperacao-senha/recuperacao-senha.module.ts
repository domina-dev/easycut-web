import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RecuperacaoSenhaRoutingModule } from './recuperacao-senha-routing.module';
import { RecuperacaoSenhaComponent } from './recuperacao-senha.component';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { LibVexModule } from 'src/app/core/modules/lib-vex.module';

@NgModule({
    declarations: [RecuperacaoSenhaComponent],
    imports: [
        CommonModule,
        RecuperacaoSenhaRoutingModule,
        MaterialModule,
        LibVexModule
    ]
})
export class RecuperacaoSenhaModule {}
