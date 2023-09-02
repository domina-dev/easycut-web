import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CadastrarProdutoComponent } from 'src/app/modais/produto/cadastrar-produto/cadastrar-produto.component';
import { Produto } from '../../../model/produto'
import { ProdutoService } from '../../../services/produtos/produtos.service'

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
    dataSource = new MatTableDataSource<Produto>();

    listaProdutos: Produto[] = []
    verLista: boolean = true;
    verGrade: boolean = false;
   

    visualizar() {
        this.verLista = !this.verLista;
        this.verGrade = !this.verGrade;
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    constructor(public dialog: MatDialog, private produtoService: ProdutoService) { }

    ngOnInit(): void {
        this.getProdutos();
    }

    listaProduto: Produto[] = []

    getProdutos() {
        this.produtoService.obterProdutos().subscribe(response => {
            this.listaProduto = response as Produto[];
            this.dataSource = new MatTableDataSource<Produto>(this.listaProduto);
            this.dataSource.paginator = this.paginator;
        },
            (error) => { console.log(error) });
    }

    openAdd() {
        this.dialog.open(CadastrarProdutoComponent);
    }

}