import { ProdutosService } from './../../../services/produtos/produtos.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
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

    listaProdutos: Produto[] = []
    verLista: boolean = true;
    verGrade: boolean = false;
    dataSource = new MatTableDataSource<Produto>();

    constructor(
      private produtosService: ProdutosService,
      public dialog: MatDialog) {
    }

    ngOnInit():void {
      this.listaProdutosNaTela()
    }
    listaProdutosNaTela(){
      this.produtosService.obterProdutosDoBackEnd().subscribe(response=>{
        this.listaProdutos = response
        this.dataSource = new MatTableDataSource<Produto>(this.listaProdutos);
        this.dataSource.paginator = this.paginator;
      },(error)=>{
        console.log("deu erro!!!")
      })
    }

    visualizar() {
        this.verLista = !this.verLista;
        this.verGrade = !this.verGrade;
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    openAdd() {
        this.dialog.open(CadastrarProdutoComponent);
    }
}

export interface Produto {
    aplicacao: string;
    nomeProduto: string;
    descricao: string;
    quantidade: string;
    preco: string;
    icone: string;
}
