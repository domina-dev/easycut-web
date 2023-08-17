import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoricoVendasRoutingModule } from './historico-vendas-routing.module';
import { HistoricoVendasComponent } from './historico-vendas.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
    declarations: [HistoricoVendasComponent],
    imports: [CommonModule, HistoricoVendasRoutingModule,MatInputModule,MatDatepickerModule,MatButtonToggleModule],
    exports: [HistoricoVendasComponent]
})
export class HistoricoVendasModule {}
