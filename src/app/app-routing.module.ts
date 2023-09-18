import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';
import { CaixaComponent } from './pages/caixa/caixa.component';

const routes: Routes = [
    {
        path: '',
        component: CustomLayoutComponent,
        children: [
            {
                path: 'agendamentos',
                loadChildren: () =>
                    import('./pages/agendamentos/agendamentos.module').then(
                        (m) => m.AgendamentosModule
                    )
            },
            {
                path: 'servicos',
                loadChildren: () =>
                    import('./pages/servicos/servicos.module').then(
                        (m) => m.ServicosModule
                    )
            },
            {
                path: 'caixa',
                loadChildren: () =>
                    import('./pages/caixa/caixa.module').then(
                        (m) => m.CaixaModule
                    )
            }
        ]
    },
    {
        path: 'login',
        loadChildren: () =>
            import('./pages/login/login.module').then((m) => m.LoginModule)
    },
    {
        path: 'recuperacao-senha',
        loadChildren: () =>
            import('./pages/recuperacao-senha/recuperacao-senha.module').then(
                (m) => m.RecuperacaoSenhaModule
            )
    },
    {
        path: 'cadastro',
        loadChildren: () => import('./pages/cadastro/cadastro.module').then(m => m.CadastroModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            // preloadingStrategy: PreloadAllModules,
            scrollPositionRestoration: 'enabled',
            relativeLinkResolution: 'corrected',
            anchorScrolling: 'enabled'
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
