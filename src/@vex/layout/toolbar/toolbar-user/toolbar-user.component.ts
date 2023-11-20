import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component
} from '@angular/core';
import { PopoverService } from '../../../components/popover/popover.service';
import { ToolbarUserDropdownComponent } from './toolbar-user-dropdown/toolbar-user-dropdown.component';
import icPerson from '@iconify/icons-ic/twotone-person';

@Component({
    selector: 'vex-toolbar-user',
    templateUrl: './toolbar-user.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarUserComponent {
    dropdownOpen: boolean;
    icPerson = icPerson;
    nomeUsuario: string = window.localStorage.getItem('estabelecimento');
    fotoEstabelecimento = window.localStorage.getItem('fotoS3Aws')

    constructor(
        private popover: PopoverService,
        private cd: ChangeDetectorRef
    ) {}

    showPopover(originRef: HTMLElement) {
        this.dropdownOpen = true;
        this.cd.markForCheck();

        const popoverRef = this.popover.open({
            content: ToolbarUserDropdownComponent,
            origin: originRef,
            offsetY: 12,
            offsetX: -70,
            position: [
                {
                    originX: 'center',
                    originY: 'top',
                    overlayX: 'center',
                    overlayY: 'bottom'
                },
                {
                    originX: 'end',
                    originY: 'bottom',
                    overlayX: 'end',
                    overlayY: 'top'
                }
            ]
        });

        popoverRef.afterClosed$.subscribe(() => {
            this.dropdownOpen = false;
            this.cd.markForCheck();
        });
    }
}
