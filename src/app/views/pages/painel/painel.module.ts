import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PainelRoutingModule } from './painel-routing.module';
import { PainelComponent } from './painel.component';
import { ConstrucaoModalModule } from 'src/app/core/lib/components/modais/construcao-modal/construcao-modal.module';


@NgModule({
  declarations: [
    PainelComponent
  ],
  imports: [
    CommonModule,
    PainelRoutingModule,ConstrucaoModalModule 
  ]
})
export class PainelModule { }
