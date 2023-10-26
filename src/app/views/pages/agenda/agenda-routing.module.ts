import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgendaComponent } from './agenda.component';
import { QuicklinkModule } from 'ngx-quicklink';
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface';

const routes: VexRoutes = [
  {
    path: '',
    component: AgendaComponent,
    data: {
      toolbarShadowEnabled: true,
      scrollDisabled: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class AgendaRoutingModule {}
