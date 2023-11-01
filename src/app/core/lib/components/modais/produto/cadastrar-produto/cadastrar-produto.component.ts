import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProdutoService } from 'src/app/core/services/produtos/produtos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Produto } from 'src/app/core/model/produto';
import { MessagesSnackBar } from 'src/app/core/constants/messagesSnackBar';

@Component({
  selector: 'vex-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.scss']
})
export class CadastrarProdutoComponent {

  load: boolean = false;

  form: FormGroup;
  legendaBotao: string = '';
  isCadastro!: boolean;
  mostraIcone: boolean = true;
  produto = new Produto();
  estabelecimentoID = window.localStorage.getItem('estabelecimento_ID');

  constructor(private fb: FormBuilder, private produtoService: ProdutoService,
    private readonly dialogRef: MatDialogRef<CadastrarProdutoComponent>,
    private snackbar: MatSnackBar, @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {

    this.isCadastro = !data.produto;
    this.legendaBotao = this.isCadastro ? "Adicionar" : "Confirmar";
    this.form = this.fb.group({
      nome: [data?.produto?.nome, Validators.required],
      qtdEstoque: [data?.produto?.qtdEstoque, Validators.required],
      valor: [data?.produto?.valor, Validators.required],
      categoria: [data?.produto?.categoria, Validators.required, Validators.required],
      descricao: [data?.produto?.descricao, Validators.required],
      valorPromocional: [data?.produto?.valorPromocional, Validators.required]
    });
  }

  cadastrarEditarProduto() {
    this.isCadastro? this.cadastrarProduto() : this.editarProduto();
  }


  cadastrarProduto() {
    this.load = true;
    this.produto = this.form.value;
    this.produto.estabelecimentoID = +this.estabelecimentoID;
    this.produtoService.cadastrarProduto(this.produto).subscribe(() => {
      console.log(this.form.value);
      this.load = false;
      this.dialogRef.close(true);
      this.snackbar.open(
        MessagesSnackBar.PRODUTO_CADASTRADO_SUCESSO,
        'FECHAR',
        {
          duration: 3000
        }
      );
    },
      (error) => {
        this.load = false;
        console.log(error)
        this.snackbar.open(
          MessagesSnackBar.ERRO_CADASTRO_PRODUTO,
          'FECHAR',
          {
            duration: 3000
          }
        );
      })
  }

  editarProduto(): void {
    this.load = true;
    this.montarBody();
    this.produtoService.alterarProduto(this.produto).subscribe(response => {
        console.log(this.form.value);
        this.load = false;
        this.dialogRef.close(true);
        this.snackbar.open(
            MessagesSnackBar.EDITAR_PRODUTO,
            "Fechar",
            {
              duration: 10000
            }
          );

    }, (error) => {
        console.log(error)
        this.load = false;
        this.snackbar.open(
            MessagesSnackBar.ERRO_EDITAR_PRODUTO,
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
