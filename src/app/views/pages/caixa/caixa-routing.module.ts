import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaixaComponent } from './caixa.component';

const routes: Routes = [
    {
        path: '',
        component: CaixaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CaixaRoutingModule {}
