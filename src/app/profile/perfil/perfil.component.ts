import { Component } from '@angular/core';
import { Link } from 'src/@vex/interfaces/link.interface'
import { scaleIn400ms } from 'src/@vex/animations/scale-in.animation';
import { fadeInRight400ms } from 'src/@vex/animations/fade-in-right.animation';
import { CommomService } from 'src/app/core/services/commom/commom.service';

export interface FriendSuggestion {
  name: string;
  imageSrc: string;
  friends: number;
  added: boolean;
}

@Component({
  selector: 'vex-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  animations: [
    scaleIn400ms,
    fadeInRight400ms
  ]
})
export class PerfilComponent {

  links: Link[] = [
    {
      label: 'SOBRE',
      route: './',
      routerLinkActiveOptions: { exact: true }
    }
  ];

  mostraIcone: boolean = true;
  nomeEstabelecimento: string = "";

constructor(private commomService:CommomService){
this.nomeEstabelecimento = commomService.estabelecimento.estabelecimento

}

  capturarImagem(event: Event, inputType: string) {
    const inputElement = event.target as HTMLInputElement;
    const selectedFile = inputElement.files[0];

    if (selectedFile) {
      console.log(`${inputType} selecionada:`, selectedFile);
    }
  }

}