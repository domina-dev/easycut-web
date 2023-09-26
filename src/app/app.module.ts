import { HttpClientModule } from '@angular/common/http';

import { DEFAULT_CURRENCY_CODE,LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { VexModule } from '../@vex/vex.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomLayoutModule } from './views/custom-layout/custom-layout.module';
import { ServicosModule } from './views/pages/servicos/servicos.module';
import { AgendaModule } from './views/pages/agenda/agenda.module';
import { AgendamentosModule } from './views/pages/agendamentos/agendamentos.module';
import { LoginModule } from './views/pages/login/login.module';

import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { LoginModalComponent } from './views/modais/primeiro-login/login-modal/login-modal.component';
import { PlanosComponent } from './views/modais/planos/planos-modal/planos.component';
import { ConstrucaoModalComponent } from './views/modais/construcao-modal/construcao-modal.component';

import { CadastrarEditarServicoComponent } from './views/modais/servico/cadastrar-editar-servico/cadastrar-editar-servico.component';
import { CadastrarEditarComponent } from './views/modais/agendamentos/cadastrar-editar/cadastrar-editar.component';
import { CadastrarProdutoComponent } from './views/modais/produto/cadastrar-produto/cadastrar-produto.component';

import { MaterialModule } from './core/modules/material.module';
import { LibVexModule } from './core/modules/lib-vex.module';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localePt, 'pt');
import { ConfirmacaoComponent } from './views/modais/confirmacao/confirmacao.component';

@NgModule({
    declarations: [
        AppComponent,
        ConstrucaoModalComponent,
        CadastrarEditarServicoComponent,
        LoginModalComponent,
        PlanosComponent,
        CadastrarEditarComponent,
        CadastrarProdutoComponent,
        ConfirmacaoComponent
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
    providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }, { provide: LOCALE_ID, useValue: 'PT-BR' }, {provide:  DEFAULT_CURRENCY_CODE, useValue: 'BRL'}],
    bootstrap: [AppComponent]
})
export class AppModule {}
