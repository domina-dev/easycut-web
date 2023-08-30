import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CadastrarProdutoComponent } from 'src/app/modais/produto/cadastrar-produto/cadastrar-produto.component';
import { Produto } from '../../../model/produto'

@Component({
    selector: 'vex-exibicao-produtos',
    templateUrl: './exibicao-produtos.component.html',
    styleUrls: ['./exibicao-produtos.component.scss']
})
export class ExibicaoProdutosComponent implements AfterViewInit, OnInit {
    displayedColumns: string[] = [
        'aplicacao',
        'nomeProduto',
        'descricao',
        'quantidade',
        'preco',
        'icone'
    ];
    dataSource = new MatTableDataSource<Produto>();

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

    constructor(public dialog: MatDialog, private produtoService: ProdutoService) {}
    
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    
    listaProdutos: Produto[] = []

    getProdutos() {
        this.produtoService.obterProdutos().subscribe(response=>{
            this.listaProdutos = response as Produto[];
            },(error)=>{console.log(error)});

            this.dataSource = new MatTableDataSource<Produto>(this.listaProdutos);
    }

    openAdd() {
        this.dialog.open(CadastrarProdutoComponent);
    }
   
}

