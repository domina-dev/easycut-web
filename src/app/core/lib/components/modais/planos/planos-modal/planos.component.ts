import { Component, OnInit } from "@angular/core";
import { Plano } from "src/app/core/model/plano";
import { EstabelecimentoService } from 'src/app/core/services/estabelecimento/estabelecimento.service';
import { PlanosService } from "src/app/core/services/planos/planos.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import icBeenhere from '@iconify/icons-ic/twotone-beenhere';
import icStars from '@iconify/icons-ic/twotone-stars';
import icBusinessCenter from '@iconify/icons-ic/twotone-business-center';
import icPhoneInTalk from '@iconify/icons-ic/twotone-phone-in-talk';
import icMail from '@iconify/icons-ic/twotone-mail';
import { fadeInUp400ms } from "src/@vex/animations/fade-in-up.animation";
import { stagger60ms } from "src/@vex/animations/stagger.animation";
import { MessagesSnackBar } from "src/app/core/constants/messagesSnackBar";

const BASIC = 1;
const PREMIUM = 2;
const PRO = 3;

@Component({
  selector: "vex-planos",
  templateUrl: "./planos.component.html",
  styleUrls: ["./planos.component.scss"],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class PlanosComponent implements OnInit {

  load: boolean = false;

  listaPlanos: Plano[] = [];

  icBeenhere = icBeenhere;
  icStars = icStars;
  icBusinessCenter = icBusinessCenter;
  icPhoneInTalk = icPhoneInTalk;
  icMail = icMail;

  constructor(private planosService: PlanosService,
    private estabelecimentoService: EstabelecimentoService,
    private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.listarPlanos();
  }

  listarPlanos() {
    this.load = true;
    this.planosService.obterPlanos().subscribe(response => {
        this.listaPlanos = response;
        this.listaPlanos.forEach(plano => {
          plano.id == BASIC ? plano.icone = "assets/img/icones/basico.svg" 
          : plano.id == PREMIUM ? plano.icone = "assets/img/icones/premium.svg"
          : plano.icone = "assets/img/icones/pro.svg"
        });
        this.load = false;
        console.log(this.listaPlanos);
    },(error) => {
          this.load = false;
          console.log(error)
    });
  }

  contratarPlano(plano: Plano) {
    this.load = true;
    const estabelecimento_ID = 4;
    const plano_ID = plano.id;
    this.estabelecimentoService.contratar(estabelecimento_ID, plano_ID).subscribe(() => {
      this.load = false;
      this.snackbar.open(MessagesSnackBar.PLANO_CONTRATADO_SUCESSO, 'Fechar',
        {
          duration: 5000
        })
    },
      (error) => {
        this.load = false;
        this.snackbar.open(MessagesSnackBar.ERRO_PLANO_CONTRATADO, 'Fechar',
          {
            duration: 5000,
            panelClass: ['error-snackbar']
          })
      });
  }
}
