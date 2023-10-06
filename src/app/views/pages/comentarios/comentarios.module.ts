import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentariosRoutingModule } from './comentarios-routing.module';
import { ComentariosComponent } from './comentarios.component';
import { ConstrucaoModalModule } from 'src/app/core/lib/components/modais/construcao-modal/construcao-modal.module';


@NgModule({
  declarations: [
    ComentariosComponent
  ],
  imports: [
    CommonModule,
    ComentariosRoutingModule, ConstrucaoModalModule
  ]
})
export class ComentariosModule { }
