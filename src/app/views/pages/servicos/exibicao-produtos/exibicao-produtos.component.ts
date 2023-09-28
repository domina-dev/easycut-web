import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CadastrarProdutoComponent } from 'src/app/core/lib/components/modais/produto/cadastrar-produto/cadastrar-produto.component';
import { Produto } from 'src/app/core/model/produto'
import { ProdutoService } from 'src/app/core/services/produtos/produtos.service'
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmacaoComponent } from 'src/app/core/lib/components/modais/confirmacao/confirmacao.component';

@Component({
    selector: 'vex-exibicao-produtos',
    templateUrl: './exibicao-produtos.component.html',
    styleUrls: ['./exibicao-produtos.component.scss']
})
export class ExibicaoProdutosComponent implements AfterViewInit, OnInit {

    displayedColumns: string[] = [
        'nomeProduto',
        'descricao',
        'quantidade',
        'preco',
        'icone'
    ];

    listaProduto: Produto[] = []

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

    constructor(public dialog: MatDialog, private produtoService: ProdutoService,
        private snackbar: MatSnackBar) { }

    listarProdutos() {
        this.produtoService.obterProdutos().subscribe(response => {
            this.listaProduto = response;
            this.dataSource = new MatTableDataSource<Produto>(this.listaProduto);
            this.dataSource.paginator = this.paginator;
        },
            (error) => { console.log(error) });
    }

    deletarProduto() {
        this.produtoService.deletaProduto().subscribe(response => {
            this.listaProduto = response;
            this.dataSource = new MatTableDataSource<Produto>(this.listaProduto);
            this.dataSource.paginator = this.paginator;
            this.snackbar.open(
                "Produto deletado com sucesso",
                "Fechar",
                {
                    duration: 10000
                }
            );
        }, (error) => {
            console.log(error)
            this.snackbar.open(
                "Produto não deletado",
                "Tenta novamente",
                {
                    duration: 10000
                }
            );

        });
    }

    openAdd() {
        this.dialog.open(CadastrarProdutoComponent);
    }
    abrirModalDeletar(produto: Produto): void {
        const dialogRef = this.dialog.open(ConfirmacaoComponent, {
            data: {
                titulo: produto.nome
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.deletarProduto();
            }
        });
    }

    visualizar() {
        this.verLista = !this.verLista;
        this.verGrade = !this.verGrade;
    }
}
