import { HttpClientModule } from '@angular/common/http';

import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
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

import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { LoginModalComponent } from './modais/primeiro-login/login-modal/login-modal.component';
import { PlanosComponent } from './modais/planos/planos-modal/planos.component';
import { ConstrucaoModalComponent } from './modais/construcao-modal/construcao-modal.component';

import { CadastrarEditarServicoComponent } from './modais/servico/cadastrar-editar-servico/cadastrar-editar-servico.component';
import { CadastrarEditarComponent } from './modais/agendamentos/cadastrar-editar/cadastrar-editar.component';
import { CadastrarProdutoComponent } from './modais/produto/cadastrar-produto/cadastrar-produto.component';

import { MaterialModule } from './modules/material.module';
import { LibVexModule } from './modules/lib-vex.module';

@NgModule({
    declarations: [
        AppComponent,
        ConstrucaoModalComponent,
        CadastrarEditarServicoComponent,
        LoginModalComponent,
        PlanosComponent,
        CadastrarEditarComponent,
        CadastrarProdutoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ServicosModule,
        AgendaModule,
        AgendamentosModule,
        LoginModule,
        MatNativeDateModule,
        MaterialModule,
        LibVexModule,

        // Vex
        VexModule,
        CustomLayoutModule
    ],
    providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }, {provide:  DEFAULT_CURRENCY_CODE, useValue: 'BRL'}],
    bootstrap: [AppComponent]
})
export class AppModule {}
