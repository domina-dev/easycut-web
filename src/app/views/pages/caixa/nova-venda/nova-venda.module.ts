import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NovaVendaRoutingModule } from './nova-venda-routing.module';
import { NovaVendaComponent } from './nova-venda.component';
import { MaterialModule } from 'src/app/core/modules/material.module';

@NgModule({
    declarations: [NovaVendaComponent],
    imports: [CommonModule, NovaVendaRoutingModule, MaterialModule],
    exports: [NovaVendaComponent]
})
export class NovaVendaModule {}
