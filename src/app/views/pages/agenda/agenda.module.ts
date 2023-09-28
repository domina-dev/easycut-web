import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaComponent } from './agenda.component';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { LibVexModule } from 'src/app/core/modules/lib-vex.module';

@NgModule({
    declarations: [AgendaComponent],
    imports: [CommonModule, AgendaRoutingModule, MaterialModule, LibVexModule]
})
export class AgendaModule {}