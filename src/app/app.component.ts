import { Component, Inject, LOCALE_ID, Renderer2 } from '@angular/core';
import { ConfigService } from '../@vex/services/config.service';
import { Settings } from 'luxon';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { NavigationService } from '../@vex/services/navigation.service';
import icLayers from '@iconify/icons-ic/twotone-layers';
import { LayoutService } from '../@vex/services/layout.service';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { SplashScreenService } from '../@vex/services/splash-screen.service';
import { Style, StyleService } from '../@vex/services/style.service';
import { ConfigName } from '../@vex/interfaces/config-name.model';

import icWork from '@iconify/icons-ic/baseline-work';
import { CommomService } from './core/services/commom/commom.service';
import icCashier from '@iconify/icons-ic/attach-money';
import icAssigment from '@iconify/icons-ic/twotone-assignment';
import icSettings from '@iconify/icons-ic/twotone-settings';
import icFeedback from '@iconify/icons-ic/twotone-feedback';
import icDateRange from '@iconify/icons-ic/date-range'
import { EstabelecimentoService } from './core/services/estabelecimento/estabelecimento.service';


@Component({
    selector: 'vex-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'vex';

    constructor(
        private configService: ConfigService,
        private styleService: StyleService,
        private renderer: Renderer2,
        private platform: Platform,
        @Inject(DOCUMENT) private document: Document,
        @Inject(LOCALE_ID) private localeId: string,
        private layoutService: LayoutService,
        private route: ActivatedRoute,
        private navigationService: NavigationService,
        private splashScreenService: SplashScreenService,
        private estabelecimentoService: EstabelecimentoService,
        private commomService: CommomService,
    ) {
        Settings.defaultLocale = this.localeId;

        if (this.platform.BLINK) {
            this.renderer.addClass(this.document.body, 'is-blink');
        }
        /**
         * Customize the template to your needs with the ConfigService
         * Example:
         *  this.configService.updateConfig({
         *    sidenav: {
         *      title: 'Custom App',
         *      imageUrl: '//placehold.it/100x100',
         *      showCollapsePin: false
         *    },
         *    showConfigButton: false,
         *    footer: {
         *      visible: false
         *    }
         *  });
         */

        /**
         * Config Related Subscriptions
         * You can remove this if you don't need the functionality of being able to enable specific configs with queryParams
         * Example: example.com/?layout=apollo&style=default
         */
        this.route.queryParamMap
            .pipe(
                map(
                    (queryParamMap) =>
                        queryParamMap.has('rtl') &&
                        coerceBooleanProperty(queryParamMap.get('rtl'))
                )
            )
            .subscribe((isRtl) => {
                this.document.body.dir = isRtl ? 'rtl' : 'ltr';
                this.configService.updateConfig({
                    rtl: isRtl
                });
            });

        this.route.queryParamMap
            .pipe(filter((queryParamMap) => queryParamMap.has('layout')))
            .subscribe((queryParamMap) =>
                this.configService.setConfig(
                    queryParamMap.get('layout') as ConfigName
                )
            );

        this.route.queryParamMap
            .pipe(filter((queryParamMap) => queryParamMap.has('style')))
            .subscribe((queryParamMap) =>
                this.styleService.setStyle(queryParamMap.get('style') as Style)
            );

        this.navigationService.items = [
            {
                type: 'link',
                label: 'Agendamentos',
                route: '/agendamentos',
                icon: icAssigment
            },
            {
                type: 'link',
                label: 'Painel',
                route: '/painel',
                icon: icLayers
            },
            {
                type: 'link',
                label: 'Caixa',
                route: '/caixa',
                icon: icCashier
            },
            {
                type: 'link',
                label: 'Agenda',
                route: '/agenda',
                icon: icDateRange
            },
            {
                type: 'link',
                label: 'Serviços',
                route: '/servicos',
                icon: icWork
            },
            {
                type: 'link',
                label: 'Comentários',
                route: '/comentarios',
                icon: icFeedback
            },
            {
                type: 'link',
                label: 'Configurações',
                route: '/config',
                icon: icSettings
            }
        ];
    }
}
