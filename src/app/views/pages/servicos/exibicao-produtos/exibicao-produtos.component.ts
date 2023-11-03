import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CadastrarProdutoComponent } from 'src/app/core/lib/components/modais/produto/cadastrar-produto/cadastrar-produto.component';
import { Produto } from 'src/app/core/model/produto';
import { ProdutoService } from 'src/app/core/services/produtos/produtos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmacaoComponent } from 'src/app/core/lib/components/modais/confirmacao/confirmacao.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessagesSnackBar } from 'src/app/core/constants/messagesSnackBar';

@Component({
    selector: 'vex-exibicao-produtos',
    templateUrl: './exibicao-produtos.component.html',
    styleUrls: ['./exibicao-produtos.component.scss']
})
export class ExibicaoProdutosComponent implements AfterViewInit, OnInit {
    load: boolean = false;

    form: FormGroup;

    displayedColumns: string[] = [
        'nome',
        'descricao',
        'quantidade',
        'preco',
        'icone'
    ];


    listaProduto: Produto[] = [];

    dataSource = new MatTableDataSource<Produto>();

    verLista: boolean = true;
    verGrade: boolean = false;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    ngOnInit(): void {
        this.listarProdutos();
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(
        public dialog: MatDialog,
        private produtoService: ProdutoService,
        private snackbar: MatSnackBar,
        private fb:FormBuilder
    ) {
        this.form = fb.group({
            filtro: [''],
            categoria: [''],
            status: ['']
          })
    }



    listarProdutos() {
        this.load = true;
        this.produtoService.obterProdutos().subscribe(
            (response) => {
                this.listaProduto = response;
                this.dataSource = new MatTableDataSource<Produto>(
                    this.listaProduto
                );
                this.dataSource.paginator = this.paginator;
                this.load = false;
            },
            (error) => {
                this.load = false;
                console.log(error);
            }
        );
    }

    deletarProduto(produto: Produto): void {
        this.load = true;
        this.produtoService.deletaProduto(produto.id).subscribe(
            () => {
                this.listarProdutos();
                this.load = false;
                this.snackbar.open(
                  MessagesSnackBar.DELETAR_PRODUTO, 'Fechar', {
                    duration: 5000
                });
            },
            (error) => {
                this.load = false;
                console.error(error);
                this.snackbar.open(
                    MessagesSnackBar.ERRO_DELETAR_PRODUTO,
                    'Tenta novamente',
                    {
                        duration: 5000
                    }
                );
            }
        );
    }


    abrirModalCadastrarEditar(produto?: Produto) {


        const dialogRef = this.dialog.open(CadastrarProdutoComponent, {
            data: {
                produto: produto

            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.listarProdutos();
            }
        });
    }

    abrirModalDeletar(produto: Produto): void {
        const dialogRef = this.dialog.open(ConfirmacaoComponent, {
            data: {
                itens: [produto.nome],
                legendaAcao: MessagesSnackBar.CONFIRMAR_EXCLUIR
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.deletarProduto(produto);
            }
        });
    }

    visualizar() {
        this.verLista = !this.verLista;
        this.verGrade = !this.verGrade;
    }

    abrirModalPromocional(produto: Produto): void {
        let mensagem: string = '';
        if (produto.promocional) {
            mensagem =
                'Tem certeza que deseja retirar este produto da promoção?';
        } else {
            mensagem =
                'Tem certeza que deseja tornar este produto promocional?';
        }

        const dialogRef = this.dialog.open(ConfirmacaoComponent, {
            data: {
                itens: [produto.nome],
                legendaAcao: mensagem
            }
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                produto.promocional = !produto.promocional;
                this.alterarProduto(produto);
            }
        });
    }

    alterarProduto(produto: Produto): void {
        this.load = true;
        this.produtoService.alterarProduto(produto).subscribe(
            (response) => {
                this.listarProdutos();
                this.load = false;
                this.snackbar.open(MessagesSnackBar.EDITAR_PRODUTO, 'Fechar', {
                    duration: 3000
                });
            },
            (error) => {
                this.load = false;
                this.snackbar.open(
                    MessagesSnackBar.ERRO_EDITAR_PRODUTO,
                    'Fechar',
                    {
                        duration: 3000
                    }
                );
            }
        );
    }
    abrirModalOcultar(produto: Produto): void {
        let mensagem: string = '';
        if (produto.ativo) {
            mensagem = 'Tem certeza que deseja ocultar este produto?';
        } else {
            mensagem = 'Tem certeza que deseja mostrar este produto?';
        }

        const dialogRef = this.dialog.open(ConfirmacaoComponent, {
            data: {
                itens: [produto.nome],
                legendaAcao: mensagem
            }
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                produto.ativo = !produto.ativo;
                this.alterarProduto(produto);
            }
        });
    }

    limparFiltro() {
        this.form.reset();
      }


      filtrarProdutos() {
        this.load = true;
        let formulario = this.form.value;
        this.produtoService.filtroProduto(formulario.filtro, formulario.status, formulario.categoria).subscribe(response => {
          this.listaProduto = response;
          this.dataSource = new MatTableDataSource<Produto>(this.listaProduto);
          this.dataSource.paginator = this.paginator;
          this.load = false;
        },
          (error) => {
            this.load = false;
            console.log(error)
          });
      }
}
