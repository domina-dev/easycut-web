import { Component, ElementRef, HostBinding, Input } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import icBookmarks from '@iconify/icons-ic/twotone-bookmarks';
import emojioneUS from '@iconify/icons-emojione/flag-for-flag-united-states';
import emojioneDE from '@iconify/icons-emojione/flag-for-flag-germany';
import icMenu from '@iconify/icons-ic/twotone-menu';
import { ConfigService } from '../../services/config.service';
import { map } from 'rxjs/operators';
import icPersonAdd from '@iconify/icons-ic/twotone-person-add';
import icAssignmentTurnedIn from '@iconify/icons-ic/twotone-assignment-turned-in';
import icBallot from '@iconify/icons-ic/twotone-ballot';
import icDescription from '@iconify/icons-ic/twotone-description';
import icAssignment from '@iconify/icons-ic/twotone-assignment';
import icReceipt from '@iconify/icons-ic/twotone-receipt';
import icDoneAll from '@iconify/icons-ic/twotone-done-all';
import { NavigationService } from '../../services/navigation.service';
import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';
import { PopoverService } from '../../components/popover/popover.service';
import { MegaMenuComponent } from '../../components/mega-menu/mega-menu.component';
import icSearch from '@iconify/icons-ic/twotone-search';
import icDateRange from '@iconify/icons-ic/date-range'
import { EventEmitterService } from 'src/app/core/services/event.service'
import { ThemePalette } from '@angular/material/core';
import { Style, StyleService } from 'src/@vex/services/style.service';
@Component({
    selector: 'vex-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

    color: ThemePalette = 'primary';
    Style = Style;
    checked = true;
    planoInf = {
        plano: "",
        icone: ""
    }
    planoId: number

    @Input() mobileQuery: boolean;

    @Input()
    @HostBinding('class.shadow-b')
    hasShadow: boolean;

    selectedStyle$ = this.styleService.style$;

    navigationItems = this.navigationService.items;

    isHorizontalLayout$ = this.configService.config$.pipe(
        map((config) => config.layout === 'horizontal')
    );
    isVerticalLayout$ = this.configService.config$.pipe(
        map((config) => config.layout === 'vertical')
    );
    isNavbarInToolbar$ = this.configService.config$.pipe(
        map((config) => config.navbar.position === 'in-toolbar')
    );
    isNavbarBelowToolbar$ = this.configService.config$.pipe(
        map((config) => config.navbar.position === 'below-toolbar')
    );

    icSearch = icSearch;
    icBookmarks = icBookmarks;
    emojioneUS = emojioneUS;
    emojioneDE = emojioneDE;
    icMenu = icMenu;
    icPersonAdd = icPersonAdd;
    icAssignmentTurnedIn = icAssignmentTurnedIn;
    icBallot = icBallot;
    icDescription = icDescription;
    icAssignment = icAssignment;
    icReceipt = icReceipt;
    icDoneAll = icDoneAll;
    icArrowDropDown = icArrowDropDown;
    icDateRange = icDateRange

    constructor(
        private layoutService: LayoutService,
        private configService: ConfigService,
        private navigationService: NavigationService,
        private popoverService: PopoverService,
        private styleService: StyleService
    ) {
        this.planoId = +window.localStorage.getItem("plano_ID")
        if (this.planoId == 1) {
            this.planoInf.icone = "assets/img/icones/basico.svg"
            this.planoInf.plano = "BASIC"
        }
        else if(this.planoId == 2){
            this.planoInf.icone = "assets/img/icones/premium.svg"
            this.planoInf.plano = "PREMIUM"
        }
        else {
            this.planoInf.icone = "assets/img/icones/pro.svg"
            this.planoInf.plano = "PRO"
        }
    }

    enableDarkMode() {
        this.styleService.setStyle(Style.dark);
    }

    disableDarkMode() {
        this.styleService.setStyle(Style.default);
    }

    openQuickpanel() {
        this.layoutService.openQuickpanel();
        EventEmitterService.get("buscarAgendamentosDoDia").emit();
    }

    openSidenav() {
        this.layoutService.openSidenav();
    }

    openMegaMenu(origin: ElementRef | HTMLElement) {
        this.popoverService.open({
            content: MegaMenuComponent,
            origin,
            position: [
                {
                    originX: 'start',
                    originY: 'bottom',
                    overlayX: 'start',
                    overlayY: 'top'
                },
                {
                    originX: 'end',
                    originY: 'bottom',
                    overlayX: 'end',
                    overlayY: 'top'
                }
            ]
        });
    }

    openSearch() {
        this.layoutService.openSearch();
    }
}
