import { Component, OnInit } from "@angular/core";
import { Plano } from "src/app/core/model/plano";
import { EstabelecimentoService } from 'src/app/core/services/estabelecimento/estabelecimento.service';
import { PlanosService } from "src/app/core/services/planos/planos.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "vex-planos",
  templateUrl: "./planos.component.html",
  styleUrls: ["./planos.component.scss"],
})
export class PlanosComponent implements OnInit {

  listaPlanos: Plano[] = [];

  constructor(private planosService: PlanosService,
    private estabelecimentoService: EstabelecimentoService,
    private snackbar: MatSnackBar) { }

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
    this.estabelecimentoService.contratar(estabelecimento_ID, plano_ID).subscribe(() => {
      this.snackbar.open("Plano contratado com sucesso!", 'Fechar',
      {
        duration: 5000
      })
    },
      (error) => {
        this.snackbar.open(error.message, 'Fechar',
        {
          duration: 5000,
          panelClass: ['error-snackbar']
        })
      });
  }
}
