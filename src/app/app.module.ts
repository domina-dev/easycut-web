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
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { LoginModalComponent } from './modais/primeiro-login/login-modal/login-modal.component';
import { ConstrucaoModalComponent } from './modais/construcao-modal/construcao-modal.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CadastrarEditarServicoComponent } from './modais/servico/cadastrar-editar-servico/cadastrar-editar-servico.component';
import { CadastrarEditarComponent } from './modais/agendamentos/cadastrar-editar/cadastrar-editar.component';


@NgModule({
    declarations: [
        AppComponent,
        ConstrucaoModalComponent,
        CadastrarEditarServicoComponent,
        LoginModalComponent,
        CadastrarEditarComponent,
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
        MatPaginatorModule,
        MatButtonModule,
        MatIconModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatDialogModule,
        MatSlideToggleModule,
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatCardModule,

        // Vex
        VexModule,
        CustomLayoutModule
    ],
    providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
    bootstrap: [AppComponent]
})
export class AppModule {}
