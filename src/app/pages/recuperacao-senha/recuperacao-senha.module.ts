import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { IconModule } from '@visurel/iconify-angular';

import { RecuperacaoSenhaRoutingModule } from './recuperacao-senha-routing.module';
import { RecuperacaoSenhaComponent } from './recuperacao-senha.component';

@NgModule({
    declarations: [RecuperacaoSenhaComponent],
    imports: [
        CommonModule,
        RecuperacaoSenhaRoutingModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        IconModule,
        MatIconModule
    ]
})
export class RecuperacaoSenhaModule {}
