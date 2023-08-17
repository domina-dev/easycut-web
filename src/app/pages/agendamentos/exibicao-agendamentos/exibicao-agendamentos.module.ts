import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { ExibicaoAgendamentosRoutingModule } from './exibicao-agendamentos-routing.module';
import { ExibicaoAgendamentosComponent } from './exibicao-agendamentos.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
    declarations: [ExibicaoAgendamentosComponent],
    imports: [
        CommonModule,
        ExibicaoAgendamentosRoutingModule,
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule,
        MatCheckboxModule,
        MatIconModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatDatepickerModule
    ],
    exports: [ExibicaoAgendamentosComponent]
})
export class ExibicaoAgendamentosModule {}
