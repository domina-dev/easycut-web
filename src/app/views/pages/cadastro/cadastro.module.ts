import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';

//importações

import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { IconModule } from '@visurel/iconify-angular';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { ScrollbarModule } from 'src/@vex/components/scrollbar/scrollbar.module';
import { LibVexModule } from 'src/app/core/modules/lib-vex.module';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatCheckboxModule,
    IconModule,
    CadastroRoutingModule,
    ScrollbarModule,
    MaterialModule,
    LibVexModule,
    NgxMaskModule.forChild()
  ]
})
export class CadastroModule { }
