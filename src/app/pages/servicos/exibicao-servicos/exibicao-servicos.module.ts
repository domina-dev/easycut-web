import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExibicaoServicosRoutingModule } from './exibicao-servicos-routing.module';
import { ExibicaoServicosComponent } from './exibicao-servicos.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    ExibicaoServicosComponent
  ],
  imports: [
    CommonModule,
    ExibicaoServicosRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [ExibicaoServicosComponent]
})
export class ExibicaoServicosModule { }
