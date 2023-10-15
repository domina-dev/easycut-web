import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component
} from '@angular/core';
import { MenuItem } from '../interfaces/menu-item.interface';
import { trackById } from '../../../../utils/track-by';
import icPerson from '@iconify/icons-ic/twotone-person';
import icSettings from '@iconify/icons-ic/twotone-settings';
import icAccountCircle from '@iconify/icons-ic/twotone-account-circle';
import icMoveToInbox from '@iconify/icons-ic/twotone-move-to-inbox';
import icListAlt from '@iconify/icons-ic/twotone-list-alt';
import icTableChart from '@iconify/icons-ic/twotone-table-chart';
import icCheckCircle from '@iconify/icons-ic/twotone-check-circle';
import icAccessTime from '@iconify/icons-ic/twotone-access-time';
import icDoNotDisturb from '@iconify/icons-ic/twotone-do-not-disturb';
import icOfflineBolt from '@iconify/icons-ic/twotone-offline-bolt';
import icChevronRight from '@iconify/icons-ic/twotone-chevron-right';
import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';
import icBusiness from '@iconify/icons-ic/twotone-business';
import icVerifiedUser from '@iconify/icons-ic/twotone-verified-user';
import icLock from '@iconify/icons-ic/twotone-lock';
import icNotificationsOff from '@iconify/icons-ic/twotone-notifications-off';
import { Icon } from '@visurel/iconify-angular';
import { PopoverRef } from '../../../../components/popover/popover-ref';
import { ConstrucaoModalComponent } from 'src/app/core/lib/components/modais/construcao-modal/construcao-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ThemePalette } from '@angular/material/core';

export interface OnlineStatus {
    id: 'online' | 'away' | 'dnd' | 'offline';
    label: string;
    icon: Icon;
    colorClass: string;
}

@Component({
    selector: 'vex-toolbar-user-dropdown',
    templateUrl: './toolbar-user-dropdown.component.html',
    styleUrls: ['./toolbar-user-dropdown.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarUserDropdownComponent {

  color: ThemePalette = 'primary';

    items: MenuItem[] = [
        {
            id: '1',
            icon: icAccountCircle,
            label: 'My Profile',
            description: 'Personal Information',
            colorClass: 'text-teal',
            route: '/apps/social'
        },
        {
            id: '2',
            icon: icMoveToInbox,
            label: 'My Inbox',
            description: 'Messages & Latest News',
            colorClass: 'text-primary',
            route: '/apps/chat'
        },
        {
            id: '3',
            icon: icListAlt,
            label: 'My Projects',
            description: 'Tasks & Active Projects',
            colorClass: 'text-amber',
            route: '/apps/scrumboard'
        },
        {
            id: '4',
            icon: icTableChart,
            label: 'Billing Information',
            description: 'Pricing & Current Plan',
            colorClass: 'text-purple',
            route: '/pages/pricing'
        }
    ];

    statuses: OnlineStatus[] = [
        {
            id: 'online',
            label: 'Online',
            icon: icCheckCircle,
            colorClass: 'text-green'
        },
        {
            id: 'away',
            label: 'Away',
            icon: icAccessTime,
            colorClass: 'text-orange'
        },
        {
            id: 'dnd',
            label: 'Do not disturb',
            icon: icDoNotDisturb,
            colorClass: 'text-red'
        },
        {
            id: 'offline',
            label: 'Offline',
            icon: icOfflineBolt,
            colorClass: 'text-gray'
        }
    ];

    activeStatus: OnlineStatus = this.statuses[0];

    trackById = trackById;
    icPerson = icPerson;
    icSettings = icSettings;
    icChevronRight = icChevronRight;
    icArrowDropDown = icArrowDropDown;
    icBusiness = icBusiness;
    icVerifiedUser = icVerifiedUser;
    icLock = icLock;
    icNotificationsOff = icNotificationsOff;

    constructor(
        private cd: ChangeDetectorRef,
        private popoverRef: PopoverRef<ToolbarUserDropdownComponent>,
        public dialog: MatDialog,
        private router: Router
    ) {}

    setStatus(status: OnlineStatus) {
        this.activeStatus = status;
        this.cd.markForCheck();
    }

    close(item?: MenuItem) {
        this.popoverRef.close();
        window.localStorage.clear();
        this.router.navigate(['/login'])
        if (item) this.openModal(item);
    }
    openModal(item: MenuItem) {
        if (item.id == '1') {
            const dialogRef = this.dialog.open(ConstrucaoModalComponent);
            dialogRef.afterClosed().subscribe((result) => {
                if (result) console.log(result);
            });
        }
    }
}
