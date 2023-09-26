import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProdutoService } from 'src/app/core/services/produtos/produtos.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'vex-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.scss']
})
export class CadastrarProdutoComponent {

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
      this.produtoService.cadastrarProduto(this.form.value).subscribe(() => {
        console.log(this.form.value);
        this.dialogRef.close();
        this.snackbar.open(
          'Cadastro de produto realizado com sucesso!',
          'FECHAR',
          {
              duration: 10000
          }
      );
      },
        (error) => {
          console.log(error)
          this.snackbar.open(
            'Produto não cadastrado.',
            'FECHAR',
            {
                duration: 10000
            }
        );
        })
    }

}
