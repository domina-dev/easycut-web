import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CadastrarProdutoComponent } from 'src/app/modais/produto/cadastrar-produto/cadastrar-produto.component';

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
    dataSource = new MatTableDataSource<Produtos>();

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

    constructor(public dialog: MatDialog, private produtosService: ProdutosService) {}
    
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

    openAdd() {
        this.dialog.open(CadastrarProdutoComponent);
    }

    listaProdutos: Produtos[] = []

    listaProdutos() {
        this.produtosService.obterProdutos().subscribe(response=>{
            this.listaProdutos = response as Produtos[];
            },(error)=>{console.log(error)});
            this.dataSource = new MatTableDataSource<Produtos>(this.listaProdutos);
    }
    
}

export interface Produtos {
    aplicacao: string;
    nomeProduto: string;
    descricao: string;
    quantidade: string;
    preco: string;
    icone: string;
}

const ELEMENT_DATA: Produtos[] = [];
