import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Reserva } from 'src/app/core/model/reservas';

@Component({
    selector: 'vex-exibicao-reservas',
    templateUrl: './exibicao-reservas.component.html',
    styleUrls: ['./exibicao-reservas.component.scss']
})
export class ExibicaoReservasComponent implements AfterViewInit {
  
  load: boolean = true;

    displayedColumns: string[] = [
        'cliente',
        'produto',
        'quantidade',
        'valor',
        'dtRetirada',
        'status'
    ];
    dataSource = new MatTableDataSource<Reserva>(CLIENT_DATA);

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    currentStatus: any;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
}

const CLIENT_DATA: Reserva[] = [
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
