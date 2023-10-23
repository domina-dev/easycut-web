import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PerfilComponent } from './perfil.component';
import { PerfilRoutingModule } from './perfil-routing.module'; 
import { IconModule } from '@visurel/iconify-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PerfilRoutingModule,
    IconModule,
    PageLayoutModule,
    FlexLayoutModule,
    MatTabsModule,
    IconModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule
  ],
  declarations: [PerfilComponent]
})
export class PerfilModule { }
