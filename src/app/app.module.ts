import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { VexModule } from '../@vex/vex.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import { AgendaModule } from './pages/agenda/agenda.module';
import { AgendamentosModule } from './pages/agendamentos/agendamentos.module';
import { LoginModule } from './pages/login/login.module';

import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { ConstrucaoModalComponent } from './modais/construcao-modal/construcao-modal.component';
import { MaterialModule } from './modules/material.module';
import { LibVexModule } from './modules/lib-vex.module';

@NgModule({
    declarations: [AppComponent, ConstrucaoModalComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
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
    providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
    bootstrap: [AppComponent]
})
export class AppModule {}
