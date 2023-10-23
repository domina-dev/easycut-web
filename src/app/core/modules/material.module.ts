import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material/core';
const MATERIAL_MODULE = [
    MatDialogModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatRadioModule,
    MatProgressBarModule,
    MatListModule,
    MatNativeDateModule,
];

@NgModule({
    declarations: [],
    imports: [CommonModule, MATERIAL_MODULE],
    exports: [MATERIAL_MODULE]
})
export class MaterialModule { }
