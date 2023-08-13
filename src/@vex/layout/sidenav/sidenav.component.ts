import { Component, Input } from '@angular/core';
import { trackByRoute } from '../../utils/track-by';
import { NavigationService } from '../../services/navigation.service';
import icRadioButtonChecked from '@iconify/icons-ic/twotone-radio-button-checked';
import icRadioButtonUnchecked from '@iconify/icons-ic/twotone-radio-button-unchecked';
import { LayoutService } from '../../services/layout.service';
import { ConfigService } from '../../services/config.service';
import { map } from 'rxjs/operators';

@Component({
    selector: 'vex-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
    @Input() collapsed: boolean;
    collapsedOpen$ = this.layoutService.sidenavCollapsedOpen$;
    title$ = this.configService.config$.pipe(
        map((config) => config.sidenav.title)
    );
    imageUrl$ = this.configService.config$.pipe(
        map((config) => config.sidenav.imageUrl)
    );
    showCollapsePin$ = this.configService.config$.pipe(
        map((config) => config.sidenav.showCollapsePin)
    );

    items = this.navigationService.items;
    trackByRoute = trackByRoute;
    icRadioButtonChecked = icRadioButtonChecked;
    icRadioButtonUnchecked = icRadioButtonUnchecked;

    constructor(
        private navigationService: NavigationService,
        private layoutService: LayoutService,
        private configService: ConfigService
    ) {}

    onMouseEnter() {
        this.layoutService.collapseOpenSidenav();
    }

    onMouseLeave() {
        this.layoutService.collapseCloseSidenav();
    }

    toggleCollapse() {
        this.collapsed
            ? this.layoutService.expandSidenav()
            : this.layoutService.collapseSidenav();
    }
}
