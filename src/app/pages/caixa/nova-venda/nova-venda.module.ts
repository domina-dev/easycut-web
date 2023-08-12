import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NovaVendaRoutingModule } from './nova-venda-routing.module';
import { NovaVendaComponent } from './nova-venda.component';

@NgModule({
    declarations: [NovaVendaComponent],
    imports: [CommonModule, NovaVendaRoutingModule],
    exports: [NovaVendaComponent]
})
export class NovaVendaModule {}
