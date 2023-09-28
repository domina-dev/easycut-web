import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FluxoCaixaRoutingModule } from './fluxo-caixa-routing.module';
import { FluxoCaixaComponent } from './fluxo-caixa.component';
import { MaterialModule } from 'src/app/core/modules/material.module';

@NgModule({
    declarations: [FluxoCaixaComponent],
    imports: [CommonModule, FluxoCaixaRoutingModule, MaterialModule],
    exports: [FluxoCaixaComponent]
})
export class FluxoCaixaModule {}
