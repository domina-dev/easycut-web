import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
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
import { LoginModalComponent } from './core/lib/components/modais/primeiro-login/login-modal/login-modal.component';
import { PlanosComponent } from './core/lib/components/modais/planos/planos-modal/planos.component';

import { CadastrarEditarServicoComponent } from './core/lib/components/modais/servico/cadastrar-editar-servico/cadastrar-editar-servico.component';
import { CadastrarEditarComponent } from './core/lib/components/modais/agendamentos/cadastrar-editar/cadastrar-editar.component';
import { CadastrarProdutoComponent } from './core/lib/components/modais/produto/cadastrar-produto/cadastrar-produto.component';

import { MaterialModule } from './core/modules/material.module';
import { LibVexModule } from './core/modules/lib-vex.module';
import localePt from '@angular/common/locales/pt';
import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { ConfirmacaoComponent } from './core/lib/components/modais/confirmacao/confirmacao.component';
import { ConfigModule } from 'src/app/views/pages/config/config.module';
import { ConstrucaoModalModule } from 'src/app/core/lib/components/modais/construcao-modal/construcao-modal.module';
import { TokenInterceptorService } from 'src/app/core/config/token-Interceptor.service';
import { IconModule } from '@visurel/iconify-angular';
import { FechamentoCaixaComponent } from './core/lib/components/modais/fechamento-caixa/fechamento-caixa/fechamento-caixa.component';
import { CompletarCadastroComponent } from './core/lib/components/modais/completarCadastro/completarCadastro.component';
import { DescontoComponent } from './core/lib/components/modais/desconto/desconto.component';
import { EditarStatusComponent } from './core/lib/components/modais/agendamentos/editar-status/editar-status/editar-status.component';
import { CardModule } from 'src/app/core/lib/shared/card/card.module';
import { NgxMaskModule } from 'ngx-mask';

registerLocaleData(localePt, 'pt');

@NgModule({
    declarations: [
        AppComponent,
        CadastrarEditarServicoComponent,
        LoginModalComponent,
        PlanosComponent,
        CadastrarEditarComponent,
        CadastrarProdutoComponent,
        ConfirmacaoComponent,
        CompletarCadastroComponent,
        FechamentoCaixaComponent,
        DescontoComponent,
        EditarStatusComponent
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
        ConfigModule,
        ConstrucaoModalModule,
        IconModule,
        CardModule,
        NgxMaskModule.forRoot({
            dropSpecialCharacters: true // ao salvar, vai manter a mascara
          }),
        // Vex
        VexModule,
        CustomLayoutModule
    ],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
        { provide: LOCALE_ID, useValue: 'PT-BR' },
        { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true, }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
