import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "vex-cadastrar-editar-servico",
  templateUrl: "./cadastrar-editar-servico.component.html",
  styleUrls: ["./cadastrar-editar-servico.component.scss"],
})
export class CadastrarEditarServicoComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: ["", Validators.required],
      tempo: ["", Validators.required],
      categoria: ["", Validators.required],
      valor: ["", Validators.required],
    });
  }
  // ngOnInit(): void {
  //   throw new Error("Method not implemented.");
  // }
}
