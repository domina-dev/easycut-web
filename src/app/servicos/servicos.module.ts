import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicosRoutingModule } from './servicos-routing.module';
import { ServicosComponent } from './servicos.component';


@NgModule({
  declarations: [
    ServicosComponent
  ],
  imports: [
    CommonModule,
    ServicosRoutingModule
  ]
})
export class ServicosModule { }
