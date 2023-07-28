import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabelaReservasComponent } from './tabela-reservas.component';

const routes: Routes = [
  {path: '', component: TabelaReservasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabelaReservasRoutingModule { }
