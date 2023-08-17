import { Component } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
    selector: 'vex-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
    items = this.navigationService.items;

    constructor(private navigationService: NavigationService) {}
}
