import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExebicaoProdutosComponent } from './exebicao-produtos.component';

const routes: Routes = [
  { path: '', component: ExebicaoProdutosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExebicaoProdutosRoutingModule { }
