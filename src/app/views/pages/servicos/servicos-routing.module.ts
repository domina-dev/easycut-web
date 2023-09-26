import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServicosComponent } from './servicos.component';

const routes: Routes = [{ path: '', component: ServicosComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ServicosRoutingModule {}
