import { Component } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'vex-quickpanel',
  templateUrl: './quickpanel.component.html',
  styleUrls: ['./quickpanel.component.scss']
})
export class QuickpanelComponent {

  date = DateTime.local().toFormat('DD');
  dayName = DateTime.local().toFormat('EEEE');

}
