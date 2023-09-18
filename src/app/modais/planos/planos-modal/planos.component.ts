import { Component, OnInit } from "@angular/core";
import { Plano } from "src/app/model/plano";
import { EstabelecimentoService } from 'src/app/services/estabelecimento/estabelecimento.service';
import { PlanosService } from "src/app/services/planos/planos.service";

@Component({
  selector: "vex-planos",
  templateUrl: "./planos.component.html",
  styleUrls: ["./planos.component.scss"],
})
export class PlanosComponent implements OnInit {

  listaPlanos: Plano[] = [];

  constructor(private planosService: PlanosService,
    private estabelecimentoService: EstabelecimentoService) { }

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

  contratarPlano(plano: Plano) {
    const estabelecimento_ID = 4;
    const plano_ID = plano.id;
    this.estabelecimentoService.contratar(estabelecimento_ID, plano_ID).subscribe(response => {
      console.log("Plano contratado com sucesso!:", response)
    },
    (error) => {
        console.error("Erro ao contrar o plano:", error);
    });
  }
}
