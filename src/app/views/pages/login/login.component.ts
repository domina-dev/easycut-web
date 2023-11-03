import {
	ChangeDetectorRef,
	Component
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';

import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { Usuario } from 'src/app/core/model/usuario';
import { EstabelecimentoService } from 'src/app/core/services/estabelecimento/estabelecimento.service';
import { MatDialog } from '@angular/material/dialog';
import { PlanosComponent } from 'src/app/core/lib/components/modais/planos/planos-modal/planos.component';
import { LoginModalComponent } from 'src/app/core/lib/components/modais/primeiro-login/login-modal/login-modal.component';
import { stagger20ms } from 'src/@vex/animations/stagger.animation';
import { CompletarCadastroComponent } from 'src/app/core/lib/components/modais/completarCadastro/completarCadastro.component';
import { CommomService } from 'src/app/core/services/commom/commom.service';

@Component({
	selector: 'vex-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	//importacao
	animations: [
		fadeInUp400ms,
		stagger20ms
	]
})
export class LoginComponent {
	form: FormGroup;

	load: boolean = false;

	firstLogin: boolean;
	planLogin: any;
	completeRegister: boolean;

	inputType = 'password';
	visible = false;

	icVisibility = icVisibility;
	icVisibilityOff = icVisibilityOff;

	public usuario = new Usuario();

	constructor(
		private router: Router,
		private fb: FormBuilder,
		private cd: ChangeDetectorRef,
		private snackbar: MatSnackBar,
		private estabelecimentoService: EstabelecimentoService,
		private commomService: CommomService,
		public dialog: MatDialog
	) {
		this.form = this.fb.group({
			email: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	login() {
		this.load = true;
		this.estabelecimentoService.saveUsuario(this.usuario).subscribe(response => {
			this.guardaDadosSessao(response);
			this.obterEstabelecimentoPeloId();
			this.firstLogin = response.primeiroLogin;
			this.planLogin = response.plano_ID;
			this.completeRegister = response.cadastroCompleto;
		},
			(error) => {
				this.load = false;
				this.snackbar.open
					(
						'Email ou senha incorretos, ou usuario nao cadastrado',
						'fechar',
						{
							duration: 5000
						}
					);
				console.log(error)
			});
	}

	guardaDadosSessao(response: any) {
		localStorage.setItem("estabelecimento", response.estabelecimento)
		localStorage.setItem("token", response.token)
		localStorage.setItem("estabelecimento_ID", response.estabelecimento_ID)
		localStorage.setItem("cadastroCompleto", response.cadastroCompleto)
		localStorage.setItem("plano_ID", response.plano_ID)
	}

	toggleVisibility() {
		if (this.visible) {
			this.inputType = 'password';
			this.visible = false;
			this.cd.markForCheck();
		} else {
			this.inputType = 'text';
			this.visible = true;
			this.cd.markForCheck();
		}
	}

	openModalPrimeiroLogin() {

		const dialogRef = this.dialog.open(LoginModalComponent);

		dialogRef.afterClosed().subscribe(result => {
			if (!this.planLogin) {
				return this.openModalPlanos();
			}
		});
	}

	openModalPlanos() {

		const dialogRef = this.dialog.open(PlanosComponent, {
			width: '70%',
		});

		dialogRef.afterClosed().subscribe(result => {
			if (!this.completeRegister) {
				return this.openModalCompletarCadastro();
			}
		});
	}

	abrirModais(response: any) {
		if (this.firstLogin) {
			return this.openModalPrimeiroLogin();
		}
		else if (!this.planLogin) {
			return this.openModalPlanos();
		}
		else if (!this.completeRegister) {
			return this.openModalCompletarCadastro();
		}
	}

	openModalCompletarCadastro() {
		this.dialog.open(CompletarCadastroComponent, {
			width: '600px',
		});
	}

	obterEstabelecimentoPeloId() {
        this.estabelecimentoService.obterEstabelecimentoPeloId().subscribe(
            (response) => {
				localStorage.setItem("estabelecimentoLogado", JSON.stringify(response))
                this.commomService.estabelecimentoSessao();
                this.load = false;
                this.router.navigate(['/']);
                this.abrirModais(response);
            },
            (error) => {
                console.log(error);
            }
        );
    }
}
