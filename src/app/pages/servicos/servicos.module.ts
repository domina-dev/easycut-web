import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { ServicosRoutingModule } from './servicos-routing.module';
import { ServicosComponent } from './servicos.component';


@NgModule({
  declarations: [
    ServicosComponent
  ],
  imports: [
    CommonModule,
    ServicosRoutingModule,
    MatTabsModule,
  ]
})
export class ServicosModule { }

@servicos({
  selector: 'servicos.component',
  templateUrl: 'servicos.component.html',
  standalone: true,
  imports: [MatTabsModule],
})
export class TabGroupBasicExample {}

function servicos(arg0: { selector: string; templateUrl: string; standalone: boolean; imports: (typeof MatTabsModule)[]; }): (target: typeof TabGroupBasicExample) => void | typeof TabGroupBasicExample {
  throw new Error('Function not implemented.');
}
