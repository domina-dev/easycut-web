import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigRoutingModule } from './config-routing.module';
import { ConfigComponent } from './config.component';
import { ConstrucaoModalModule } from 'src/app/core/lib/components/modais/construcao-modal/construcao-modal.module';

@NgModule({
  declarations: [ConfigComponent],
  imports: [CommonModule, ConfigRoutingModule, ConstrucaoModalModule]
})
export class ConfigModule { }
