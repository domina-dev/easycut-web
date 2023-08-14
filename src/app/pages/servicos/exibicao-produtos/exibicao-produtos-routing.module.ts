import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExibicaoProdutosComponent } from './exibicao-produtos.component';

const routes: Routes = [{ path: '', component: ExibicaoProdutosComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExibicaoProdutosRoutingModule {}
