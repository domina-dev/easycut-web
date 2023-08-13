import { Component, Input, TemplateRef } from '@angular/core';
import icFeedback from '@iconify/icons-ic/twotone-feedback';
import icBusinessCenter from '@iconify/icons-ic/twotone-business-center';
import icPhoneInTalk from '@iconify/icons-ic/twotone-phone-in-talk';
import icMail from '@iconify/icons-ic/twotone-mail';

@Component({
    selector: 'vex-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    @Input() customTemplate: TemplateRef<any>;
    iconFooter = icFeedback;
    icBusinessCenter = icBusinessCenter;
    icPhoneInTalk = icPhoneInTalk;
    icMail = icMail;
}
