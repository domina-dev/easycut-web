import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import { ServicosModule } from './pages/servicos/servicos.module';
import { AgendaModule } from './pages/agenda/agenda.module';
import { AgendamentosModule } from './pages/agendamentos/agendamentos.module';
import { LoginModule } from './pages/login/login.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CaixaComponent } from './pages/caixa/caixa.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AgendaModule,
    AgendamentosModule,
    LoginModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,


    // Vex
    VexModule,
    CustomLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
