import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaixaRoutingModule } from './caixa-routing.module';
import { CaixaComponent } from './caixa.component';
import { NovaVendaModule } from './nova-venda/nova-venda.module';
import { FluxoCaixaModule } from './fluxo-caixa/fluxo-caixa.module';
import { HistoricoVendasModule } from './historico-vendas/historico-vendas.module';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { LibVexModule } from 'src/app/core/modules/lib-vex.module';

@NgModule({
    declarations: [CaixaComponent],
    imports: [
        CommonModule,
        CaixaRoutingModule,
        NovaVendaModule,
        FluxoCaixaModule,
        HistoricoVendasModule,
        MaterialModule,
        LibVexModule
    ]
})
export class CaixaModule {}
