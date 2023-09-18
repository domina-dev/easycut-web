import { Component, OnInit } from "@angular/core";
import { Plano } from "src/app/model/plano";
import { PlanosService } from "src/app/services/planos/planos.service";

@Component({
  selector: "vex-planos",
  templateUrl: "./planos.component.html",
  styleUrls: ["./planos.component.scss"],
})
export class PlanosComponent implements OnInit {

  listaPlanos: Plano[] = [];

  constructor(private planosService: PlanosService) { }

  ngOnInit(): void {
    this.listarPlanos();
  }

  listarPlanos() {
    this.planosService.obterPlanos()
    .subscribe(response => {
      this.listaPlanos = response;
      console.log(this.listaPlanos);
    },
      (error) => {
        console.log(error)
      });
  }
  contratarPlano() {
      this.contratarPlano()
    }
}
