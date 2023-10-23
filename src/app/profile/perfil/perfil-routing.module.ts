import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { PerfilComponent } from './perfil.component';
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    component: PerfilComponent,
    children: [
        {
          path: '',
          loadChildren: () => import('./social-profile/social-profile.module').then(m => m.SocialProfileModule)
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class PerfilRoutingModule {
}
