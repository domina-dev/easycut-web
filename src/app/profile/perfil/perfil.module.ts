import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; // Importe o RouterModule aqui
import { PerfilComponent } from './perfil.component';

const routes: Routes = [
  {
    path: 'perfil',
    component: PerfilComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule, // Adicione o RouterModule aos imports
  ],
  declarations: [PerfilComponent]
})
export class PerfilModule { }
