import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Reservas } from 'src/app/model/reservas';

@Component({
    selector: 'vex-exibicao-reservas',
    templateUrl: './exibicao-reservas.component.html',
    styleUrls: ['./exibicao-reservas.component.scss']
})
export class ExibicaoReservasComponent {
    displayedColumns: string[] = [
        'cliente',
        'produto',
        'quantidade',
        'valor',
        'dtRetirada',
        'status'
    ];
    dataSource = new MatTableDataSource<Reservas>(CLIENT_DATA);
}

const CLIENT_DATA: Reservas[] = [
    {
        cliente: 'João Batista Soares',
        produto: 'Pomada modeladora Blackpool',
        quantidade: '2 unidades',
        valor: 'R$ 50,00',
        dtRetirada: '30/06/2021',
        status: 'entregue'
    },
    {
        cliente: 'João Batista Soares',
        produto: 'Pomada modeladora Blackpool',
        quantidade: '2 unidades',
        valor: 'R$ 50,00',
        dtRetirada: '30/06/2021',
        status: 'aguar-retirada'
    },
    {
        cliente: 'João Batista Soares',
        produto: 'Pomada modeladora Blackpool',
        quantidade: '2 unidades',
        valor: 'R$ 50,00',
        dtRetirada: '30/06/2021',
        status: 'aguar-retirada'
    },
    {
        cliente: 'João Batista Soares',
        produto: 'Pomada modeladora Blackpool',
        quantidade: '2 unidades',
        valor: 'R$ 50,00',
        dtRetirada: '30/06/2021',
        status: 'cancelado'
    },
    {
        cliente: 'João Batista Soares',
        produto: 'Pomada modeladora Blackpool',
        quantidade: '2 unidades',
        valor: 'R$ 50,00',
        dtRetirada: '30/06/2021',
        status: 'entregue'
    },
    {
        cliente: 'João Batista Soares',
        produto: 'Pomada modeladora Blackpool',
        quantidade: '2 unidades',
        valor: 'R$ 50,00',
        dtRetirada: '30/06/2021',
        status: 'aguar-retirada'
    },
    {
        cliente: 'João Batista Soares',
        produto: 'Pomada modeladora Blackpool',
        quantidade: '2 unidades',
        valor: 'R$ 50,00',
        dtRetirada: '30/06/2021',
        status: 'cancelado'
    }
];
