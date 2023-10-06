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

  load: boolean = false;

  listaPlanos: Plano[] = [];

  constructor(private planosService: PlanosService,
    private estabelecimentoService: EstabelecimentoService,
    private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.listarPlanos();
  }

  listarPlanos() {
    this.load = true;
    this.planosService.obterPlanos()
      .subscribe(response => {
        this.listaPlanos = response;
        this.load = false;
        console.log(this.listaPlanos);
      },
        (error) => {
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
      this.snackbar.open("Plano contratado com sucesso!", 'Fechar',
      {
        duration: 5000
      })
    },
      (error) => {
        this.load = false;
        this.snackbar.open(error.message, 'Fechar',
        {
          duration: 5000,
          panelClass: ['error-snackbar']
        })
      });
  }
}
