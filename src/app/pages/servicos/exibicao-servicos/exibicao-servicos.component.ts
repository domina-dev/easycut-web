import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CadastrarEditarServicoComponent } from 'src/app/modais/servico/cadastrar-editar-servico/cadastrar-editar-servico.component';

@Component({
    selector: 'vex-exibicao-servicos',
    templateUrl: './exibicao-servicos.component.html',
    styleUrls: ['./exibicao-servicos.component.scss']
})
export class ExibicaoServicosComponent implements AfterViewInit {
    displayedColumns: string[] = [
        'aplicacao',
        'servico',
        'descricao',
        'tempo',
        'preco',
        'icone'
    ];

    dataSource = new MatTableDataSource<ListaServicos>(ELEMENT_DATA);

    verLista: boolean = true;
    verGrade: boolean = false;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    matDialogActions: any;

    constructor(public dialog: MatDialog) {}

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    openDialog() {
        this.dialog.open(CadastrarEditarServicoComponent);
    }

    vizualizar() {
        this.verLista = !this.verLista;
        this.verGrade = !this.verGrade;
    }
}

export interface ListaServicos {
    aplicacao: string;
    servico: string;
    descricao: string;
    tempo: string;
    preco: string;
    icone: string;
}

const ELEMENT_DATA: ListaServicos[] = [
    {
        aplicacao: 'Cabelo',
        servico: 'Corte simples',
        descricao: 'Corte de cabelo masculino simples',
        tempo: '30 min-50min',
        preco: 'R$ 30,00',
        icone: ''
    },
    {
        aplicacao: 'Cabelo',
        servico: 'Corte simples',
        descricao: 'Corte de cabelo masculino simples',
        tempo: '30 min-50min',
        preco: 'R$ 30,00',
        icone: ''
    },
    {
        aplicacao: 'Cabelo',
        servico: 'Corte simples',
        descricao: 'Corte de cabelo masculino simples',
        tempo: '30 min-50min',
        preco: 'R$ 30,00',
        icone: ''
    },
    {
        aplicacao: 'Cabelo',
        servico: 'Corte simples',
        descricao: 'Corte de cabelo masculino simples',
        tempo: '30 min-50min',
        preco: 'R$ 30,00',
        icone: ''
    },
    {
        aplicacao: 'Cabelo',
        servico: 'Corte simples',
        descricao: 'Corte de cabelo masculino simples',
        tempo: '30 min-50min',
        preco: 'R$ 30,00',
        icone: ''
    },
    {
        aplicacao: 'Cabelo',
        servico: 'Corte simples',
        descricao: 'Corte de cabelo masculino simples',
        tempo: '30 min-50min',
        preco: 'R$ 30,00',
        icone: ''
    },
    {
        aplicacao: 'Cabelo',
        servico: 'Corte simples',
        descricao: 'Corte de cabelo masculino simples',
        tempo: '30 min-50min',
        preco: 'R$ 30,00',
        icone: ''
    },
    {
        aplicacao: 'Cabelo',
        servico: 'Corte simples',
        descricao: 'Corte de cabelo masculino simples',
        tempo: '30 min-50min',
        preco: 'R$ 30,00',
        icone: ''
    }
];
