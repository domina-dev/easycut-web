import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Inject,
    Optional
} from '@angular/core';
import { MenuItem } from '../interfaces/menu-item.interface';
import { trackById } from '../../../../utils/track-by';
import icPerson from '@iconify/icons-ic/twotone-person';
import icSettings from '@iconify/icons-ic/twotone-settings';
import icAccountCircle from '@iconify/icons-ic/twotone-account-circle';
import icMoveToInbox from '@iconify/icons-ic/twotone-move-to-inbox';
import icTableChart from '@iconify/icons-ic/twotone-table-chart';
import icCheckCircle from '@iconify/icons-ic/twotone-check-circle';
import icAccessTime from '@iconify/icons-ic/twotone-access-time';
import icOfflineBolt from '@iconify/icons-ic/twotone-offline-bolt';
import icChevronRight from '@iconify/icons-ic/twotone-chevron-right';
import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';
import icBusiness from '@iconify/icons-ic/twotone-business';
import icVerifiedUser from '@iconify/icons-ic/twotone-verified-user';
import icLock from '@iconify/icons-ic/twotone-lock';
import icNotificationsOff from '@iconify/icons-ic/twotone-notifications-off';
import { Icon } from '@visurel/iconify-angular';
import { PopoverRef } from '../../../../components/popover/popover-ref';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

export interface OnlineStatus {
    id: 'aberto' | 'ausente' | 'fechado';
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
    items: MenuItem[] = [
        {
            id: '1',
            icon: icAccountCircle,
            label: 'Meu Perfil',
            description: 'Informações do Estabelecimento',
            colorClass: 'text-teal',
            route: '/perfil'
        },
        {
            id: '2',
            icon: icMoveToInbox,
            label: 'Caixa de Entrada',
            description: 'Mensagens e Atualizações',
            colorClass: 'text-primary',
            route: '/apps/chat'
        },
        {
            id: '3',
            icon: icTableChart,
            label: 'Informações de Cobrança',
            description: 'Preços e Planos',
            colorClass: 'text-purple',
            route: '/pages/pricing'
        }
    ];

    statuses: OnlineStatus[] = [
        {
            id: 'aberto',
            label: 'Aberto',
            icon: icCheckCircle,
            colorClass: 'text-green'
        },
        {
            id: 'ausente',
            label: 'Ausente',
            icon: icAccessTime,
            colorClass: 'text-orange'
        },
        {
            id: 'fechado',
            label: 'Fechado',
            icon: icOfflineBolt,
            colorClass: 'text-gray'
        }
    ];

    activeStatus: OnlineStatus = this.statuses[0];
    nomeUsuario: string = window.localStorage.getItem('estabelecimento');


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
        private router: Router,
        @Optional() @Inject(MAT_DIALOG_DATA) public data: {nomeEstabelecimento: string}
    ) {}

    setStatus(status: OnlineStatus) {
        this.activeStatus = status;
        this.cd.markForCheck();
    }

    sair() {
        this.popoverRef.close();
        window.localStorage.clear();
        this.router.navigate(['/login'])
    }

    close() {
        this.popoverRef.close();
    }

}