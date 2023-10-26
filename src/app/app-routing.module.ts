import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomLayoutComponent } from './views/custom-layout/custom-layout.component';

const routes: Routes = [
    {
        path: '',
        component: CustomLayoutComponent,
        children: [
            {
                path: 'agendamentos',
                loadChildren: () =>
                    import('./views/pages/agendamentos/agendamentos.module').then(
                        (m) => m.AgendamentosModule
                    )
            },
            {
                path: 'servicos',
                loadChildren: () =>
                    import('./views/pages/servicos/servicos.module').then(
                        (m) => m.ServicosModule
                    )
            },
            {
                path: 'caixa',
                loadChildren: () =>
                    import('./views/pages/caixa/caixa.module').then(
                        (m) => m.CaixaModule
                    )
            },
            {
                path: 'config',
                loadChildren: () =>
                    import('./views/pages/config/config.module').then(
                        (m) => m.ConfigModule
                    )
            },
            {
                path: 'painel',
                loadChildren: () =>
                    import('./views/pages/painel/painel.module').then(
                        (m) => m.PainelModule
                    )
            },
            {
                path: 'comentarios',
                loadChildren: () =>
                    import('./views/pages/comentarios/comentarios.module').then(
                        (m) => m.ComentariosModule
                    )
            },
            {
                path: 'agenda',
                loadChildren: () =>
                    import('./views/pages/agenda/agenda.module').then(
                        (m) => m.AgendaModule
                    ),
                    data: {
                        toolbarShadowEnabled: true
                    }
            },
            {
                path: 'perfil',
                loadChildren: () => import('src/app/profile/perfil/perfil.module').then(m => m.PerfilModule)
            }
        ]
    },
    {
        path: 'login',
        loadChildren: () =>
            import('./views/pages/login/login.module').then((m) => m.LoginModule)
    },
    {
        path: 'recuperacao-senha',
        loadChildren: () =>
            import('./views/pages/recuperacao-senha/recuperacao-senha.module').then(
                (m) => m.RecuperacaoSenhaModule
            )
    },
    {
        path: 'cadastro',
        loadChildren: () => import('./views/pages/cadastro/cadastro.module').then(m => m.CadastroModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            // preloadingStrategy: PreloadAllModules,|
            scrollPositionRestoration: 'enabled',
            relativeLinkResolution: 'corrected',
            anchorScrolling: 'enabled'
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
