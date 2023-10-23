import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { SocialProfileComponent } from './social-profile.component';


const routes: Routes = [
  {
    path: '',
    component: SocialProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class SocialProfileRoutingModule {
}
