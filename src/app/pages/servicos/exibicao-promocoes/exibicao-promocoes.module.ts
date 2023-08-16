import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExibicaoPromocoesRoutingModule } from './exibicao-promocoes-routing.module';
import { ExibicaoPromocoesComponent } from './exibicao-promocoes.component';

@NgModule({
    declarations: [ExibicaoPromocoesComponent],
    imports: [CommonModule, ExibicaoPromocoesRoutingModule],
    exports: [ExibicaoPromocoesComponent]
})
export class ExibicaoPromocoesModule {}
