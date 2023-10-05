import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProdutoService } from 'src/app/core/services/produtos/produtos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Produto } from 'src/app/core/model/produto';


@Component({
  selector: 'vex-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.scss']
})
export class CadastrarProdutoComponent {

  form: FormGroup;
  legendaBotao: string = '';
  isCadastro!: boolean;

  servico = new Produto();

  constructor(private fb: FormBuilder, private produtoService: ProdutoService,
    private readonly dialogRef: MatDialogRef<CadastrarProdutoComponent>,
    private snackbar: MatSnackBar, @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {

    this.isCadastro = data.servico ? false : true;
    this.legendaBotao = this.isCadastro ? "Adicionar" : "Confirmar";
    this.form = this.fb.group({
      nome: [data?.produto?.nomeProduto, Validators.required],
      quantidade: [data?.produto?.qtdEstoque, Validators.required],
      valor: [data?.produto?.valor, Validators.required],
      categoria: ['', Validators.required]
    });
  }

  cadastrarEditarProduto() {
    this.isCadastro?this.cadastrarProduto() : this.editarProduto()
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

  editarProduto(): void {
    this.montarBody();
    this.produtoService.editaProduto(this.produto).subscribe(response => {
        console.log(this.form.value);
        this.dialogRef.close(true);
        this.snackbar.open(
            "Produto editado com sucesso",
            "Fechar",
            {
              duration: 10000
            }
          );

    }, (error) => {
        console.log(error)
        this.snackbar.open(
            "Produto não editado",
            "Tenta novamente",
            {
                duration: 10000
            }
        );
    })
}

private montarBody() {
  let id = this.data?.produto?.id;
  let estabelecimentoID = this.data?.produto?.estabelecimentoID;
  this.produto = this.form.value;
  this.produto.id = id;
  this.produto.estabelecimentoID = estabelecimentoID;
}

}
