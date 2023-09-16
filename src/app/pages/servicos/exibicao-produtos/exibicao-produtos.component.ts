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
    
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    
    ngOnInit(): void {
        this.listarProdutos();
    }

    dataSource = new MatTableDataSource<Produto>();

    verLista: boolean = true;
    verGrade: boolean = false;
   
    @ViewChild(MatPaginator) paginator: MatPaginator;
    
    listaProduto: Produto[] = []

    constructor(public dialog: MatDialog, private produtoService: ProdutoService) {}
    
    listarProdutos() {
        this.produtoService.obterProdutos().subscribe(response => {
            this.listaProduto = response;
            this.dataSource = new MatTableDataSource<Produto>(this.listaProduto);
            this.dataSource.paginator = this.paginator;
        },
        (error) => {console.log(error)});
    }

    deletarProduto() {
        this.produtoService.deletaProduto().subscribe(response => {
            console.log("Deletado com sucesso")
            this.listaProduto = response;
            this.dataSource = new MatTableDataSource<Produto>(this.listaProduto);
            this.dataSource.paginator = this.paginator;
      }, (error) => {console.log(error, "Falha ao deletar produto")});


    }
    
    openAdd() {
        this.dialog.open(CadastrarProdutoComponent);
    }
    
    visualizar() {
        this.verLista = !this.verLista;
        this.verGrade = !this.verGrade;
    }
}