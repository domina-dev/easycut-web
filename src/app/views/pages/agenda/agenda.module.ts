import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaComponent } from './agenda.component';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { LibVexModule } from 'src/app/core/modules/lib-vex.module';
import { ConstrucaoModalModule } from 'src/app/core/lib/components/modais/construcao-modal/construcao-modal.module';

// Calendario Vex
import { CalendarModule as AngularCalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ScrollbarModule } from 'src/@vex/components/scrollbar/scrollbar.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarEditComponent } from './calendar-edit/calendar-edit.component';
import { IconModule } from '@visurel/iconify-angular';

@NgModule({
    declarations: [AgendaComponent, CalendarEditComponent],
    imports: [CommonModule,
            AgendaRoutingModule,
            MaterialModule,
            LibVexModule,
            ConstrucaoModalModule,
            AngularCalendarModule.forRoot({
                provide: DateAdapter,
                useFactory: adapterFactory
            }),
            ScrollbarModule,
            ReactiveFormsModule,
            IconModule,
    ],
    entryComponents: [CalendarEditComponent]
})
export class AgendaModule {}
