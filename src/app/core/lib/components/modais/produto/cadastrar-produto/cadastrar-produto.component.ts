import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProdutoService } from 'src/app/core/services/produtos/produtos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MENSAGENS } from 'src/app/core/constants/mensagens';

@Component({
  selector: 'vex-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.scss']
})
export class CadastrarProdutoComponent {

  load: boolean = false;

  form: FormGroup;

    constructor(private fb: FormBuilder, private produtoService: ProdutoService, private readonly dialogRef: MatDialogRef<CadastrarProdutoComponent>, private snackbar: MatSnackBar) {
      this.form = this.fb.group({
        nome: ['', Validators.required],
        tempo: ['', Validators.required],
        categoria: ['', Validators.required],
        valor: ['', Validators.required],
      });
    }

    cadastrarProduto() {
      this.load = true;
      this.produtoService.cadastrarProduto(this.form.value).subscribe(() => {
        console.log(this.form.value);
        this.load = false;
        this.dialogRef.close();
        this.snackbar.open(
          MENSAGENS.PRODUTO_CADASTRADO_SUCESSO,
          'Fechar',
          {
              duration: 10000
          }
      );
      },
        (error) => {
          this.load = false;
          console.log(error)
          this.snackbar.open(
            MENSAGENS.ERRO_CADASTRO_PRODUTO,
            'FECHAR',
            {
                duration: 10000
            }
        );
        })
    }

}
