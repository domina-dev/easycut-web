import { PlanosService } from './../../../services/planos/planos.service';
import { Planos } from 'src/app/model/planos';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "vex-planos",
  templateUrl: "./planos.component.html",
  styleUrls: ["./planos.component.scss"],
})
export class PlanosComponent implements OnInit {

  listaPlanos: Planos[] = []

  constructor ( private planosService: PlanosService) {}

  ngOnInit(): void {
    this.listaPlano()
  }

  listaPlano() {
    this.planosService.obterPlanos().subscribe(response => {
      this.listaPlanos = response
    })
  }

}
