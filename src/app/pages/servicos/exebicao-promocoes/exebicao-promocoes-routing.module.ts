import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExebicaoPromocoesComponent } from './exebicao-promocoes.component';

const routes: Routes = [
  { path: 'promoçoes', component: ExebicaoPromocoesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExebicaoPromocoesRoutingModule { }
