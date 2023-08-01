import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaixaRoutingModule } from './caixa-routing.module';
import { NovaVendaComponent } from './nova-venda/nova-venda.component';
import { FluxoCaixaComponent } from './fluxo-caixa/fluxo-caixa.component';
import { HistoricoVendasComponent } from './historico-vendas/historico-vendas.component';
import { NovaVendaModule } from './nova-venda/nova-venda.module';
import { FluxoCaixaModule } from './fluxo-caixa/fluxo-caixa.module';
import { HistoricoVendasModule } from './historico-vendas/historico-vendas.module';
import { PageLayoutModule } from "../../../@vex/components/page-layout/page-layout.module";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    NovaVendaComponent,
    FluxoCaixaComponent,
    HistoricoVendasComponent
  ],
  imports: [
    CommonModule,
    CaixaRoutingModule,
    NovaVendaModule,
    FluxoCaixaModule,
    HistoricoVendasModule,
    PageLayoutModule,
    FlexLayoutModule, 
    MatTabsModule,   
  ]
})
export class CaixaModule { }
