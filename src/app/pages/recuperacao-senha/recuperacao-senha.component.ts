import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import icMail from "@iconify/icons-ic/twotone-mail";

import { fadeInUp400ms } from "../../../@vex/animations/fade-in-up.animation";

@Component({
  selector: "vex-recuperacao-senha",
  templateUrl: "./recuperacao-senha.component.html",
  styleUrls: ["./recuperacao-senha.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInUp400ms],
})
export class RecuperacaoSenhaComponent {
  form: FormGroup;
  icMail = icMail;

  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
  ) {
    this.form = this.fb.group({
      email: ["", Validators.required],
    });
  }

  enviar() {
    if (!this.form.get("email").value) {
      this.snackbar.open(
        "Não podemos recuperar sua senha, sem seu e-mail.",
        "DIGITE UM E-MAIL VALIDO",
        {
          duration: 10000,
        },
      );
    } else {
      this.fechar();
    }
  }
  fechar() {
    this.snackbar.dismiss();
  }
}
