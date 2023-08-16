import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    ViewChild
} from '@angular/core';
import icSearch from '@iconify/icons-ic/twotone-search';

@Component({
    selector: 'vex-toolbar-search',
    templateUrl: './toolbar-search.component.html',
    styleUrls: ['./toolbar-search.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarSearchComponent {
    isOpen: boolean;
    icSearch = icSearch;

    @ViewChild('input', { read: ElementRef, static: true }) input: ElementRef;

    constructor(private cd: ChangeDetectorRef) {}

    open() {
        this.isOpen = true;
        this.cd.markForCheck();

        setTimeout(() => {
            this.input.nativeElement.focus();
        }, 100);
    }

    close() {
        this.isOpen = false;
        this.cd.markForCheck();
    }
}
