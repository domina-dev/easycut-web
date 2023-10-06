import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VexModule } from 'src/@vex/vex.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { ContainerModule } from 'src/@vex/directives/container/container.module';
import { IconModule } from '@visurel/iconify-angular';

const LIB_VEX = [ContainerModule, PageLayoutModule, BreadcrumbsModule];
@NgModule({
    declarations: [],
    imports: [CommonModule, VexModule, LIB_VEX, IconModule],
    exports: [LIB_VEX]
})
export class LibVexModule {}
