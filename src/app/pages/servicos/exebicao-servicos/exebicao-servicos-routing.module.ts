import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExebicaoServicosComponent } from './exebicao-servicos.component';

const routes: Routes = [
  { path: '', component: ExebicaoServicosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExebicaoServicosRoutingModule { }