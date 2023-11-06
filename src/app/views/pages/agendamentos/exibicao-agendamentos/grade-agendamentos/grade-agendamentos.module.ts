import { MaterialModule } from './../../../../../core/modules/material.module';
import { LibVexModule } from './../../../../../core/modules/lib-vex.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'src/app/core/lib/shared/card/card.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    LibVexModule
  ]
})
export class GradeAgendamentosModule { }
