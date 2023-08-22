import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CadastrarProdutoComponent } from 'src/app/modais/produto/cadastrar-produto/cadastrar-produto.component';

@Component({
    selector: 'vex-exibicao-produtos',
    templateUrl: './exibicao-produtos.component.html',
    styleUrls: ['./exibicao-produtos.component.scss']
})
export class ExibicaoProdutosComponent implements AfterViewInit {
    displayedColumns: string[] = [
        'aplicacao',
        'nomeProduto',
        'descricao',
        'quantidade',
        'preco',
        'icone'
    ];
    dataSource = new MatTableDataSource<ListaProdutos>(ELEMENT_DATA);

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

    constructor(public dialog: MatDialog) {}

    openAdd() {
        this.dialog.open(CadastrarProdutoComponent);
    }
}

export interface ListaProdutos {
    aplicacao: string;
    nomeProduto: string;
    descricao: string;
    quantidade: string;
    preco: string;
    icone: string;
}

const ELEMENT_DATA: ListaProdutos[] = [
    {
        aplicacao: 'Cabelo',
        nomeProduto: 'Pomada Modeladora Blacpool',
        descricao: 'BLACKPOOL proporciona uma aparência mais natu',
        quantidade: '46 unidades',
        preco: 'R$ 30,00',
        icone: ''
    },
    {
        aplicacao: 'Cabelo',
        nomeProduto: 'Pomada Modeladora Blacpool',
        descricao: 'BLACKPOOL proporciona uma aparência mais natu',
        quantidade: '46 unidades',
        preco: 'R$ 30,00',
        icone: ''
    },
    {
        aplicacao: 'Cabelo',
        nomeProduto: 'Pomada Modeladora Blacpool',
        descricao: 'BLACKPOOL proporciona uma aparência mais natu',
        quantidade: '46 unidades',
        preco: 'R$ 30,00',
        icone: ''
    },
    {
        aplicacao: 'Cabelo',
        nomeProduto: 'Pomada Modeladora Blacpool',
        descricao: 'BLACKPOOL proporciona uma aparência mais natu',
        quantidade: '46 unidades',
        preco: 'R$ 30,00',
        icone: ''
    },
    {
        aplicacao: 'Cabelo',
        nomeProduto: 'Pomada Modeladora Blacpool',
        descricao: 'BLACKPOOL proporciona uma aparência mais natu',
        quantidade: '46 unidades',
        preco: 'R$ 30,00',
        icone: ''
    },
    {
        aplicacao: 'Cabelo',
        nomeProduto: 'Pomada Modeladora Blacpool',
        descricao: 'BLACKPOOL proporciona uma aparência mais natu',
        quantidade: '46 unidades',
        preco: 'R$ 30,00',
        icone: ''
    },
    {
        aplicacao: 'Cabelo',
        nomeProduto: 'Pomada Modeladora Blacpool',
        descricao: 'BLACKPOOL proporciona uma aparência mais natu',
        quantidade: '46 unidades',
        preco: 'R$ 30,00',
        icone: ''
    }
];
