import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { LibVexModule } from 'src/app/core/modules/lib-vex.module';
import { IconModule } from '@visurel/iconify-angular';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        LoginRoutingModule,
        MaterialModule,
        LibVexModule,
        IconModule
    ]
})
export class LoginModule {}
