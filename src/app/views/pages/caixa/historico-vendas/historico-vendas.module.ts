import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoricoVendasRoutingModule } from './historico-vendas-routing.module';
import { HistoricoVendasComponent } from './historico-vendas.component';
import { MaterialModule } from 'src/app/core/modules/material.module';

@NgModule({
    declarations: [HistoricoVendasComponent],
    imports: [CommonModule, HistoricoVendasRoutingModule, MaterialModule],
    exports: [HistoricoVendasComponent]
})
export class HistoricoVendasModule {}
