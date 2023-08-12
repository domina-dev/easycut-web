import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecuperacaoSenhaComponent } from './recuperacao-senha.component';

const routes: Routes = [
    {
        path: '',
        component: RecuperacaoSenhaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecuperacaoSenhaRoutingModule {}
