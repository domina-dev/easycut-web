import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstrucaoModalComponent } from './construcao-modal.component'
import { MaterialModule } from 'src/app/core/modules/material.module';


@NgModule({
  declarations: [
    ConstrucaoModalComponent
  ],
  imports: [
    CommonModule, MaterialModule
  ],
  exports: [
    ConstrucaoModalComponent
  ],
})
export class ConstrucaoModalModule { }
