import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecuperacaoSenhaRoutingModule } from './recuperacao-senha-routing.module';
import { RecuperacaoSenhaComponent } from './recuperacao-senha.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { IconModule } from '@visurel/iconify-angular';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    RecuperacaoSenhaComponent
  ],
  imports: [
    CommonModule,
    RecuperacaoSenhaRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    IconModule,
    MatIconModule
  ]
})
export class RecuperacaoSenhaModule { }
