import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { LibVexModule } from 'src/app/core/modules/lib-vex.module';
import { IconModule } from '@visurel/iconify-angular';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LibVexModule,
    IconModule
  ],
  exports: [CardComponent]
})
export class CardModule { }
