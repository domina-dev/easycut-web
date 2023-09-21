import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Servico } from 'src/app/pages/servicos/exibicao-servicos/exibicao-servicos.component';
@Component({
    selector: 'vex-izi-table',
    templateUrl: './izi-table.component.html',
    styleUrls: ['./izi-table.component.scss']
})
export class IziTableComponent implements OnInit, AfterViewInit {
    @Input() listaDados: any[] = [];

     displayedColumns: string[] = [
         'nome',
         'preco',
         'descricao',
         'tempoEstimado',
         'categoria',
     ];

     dataSource = new MatTableDataSource<Servico>();

     @ViewChild(MatPaginator) paginator: MatPaginator;
    ngOnInit(): void {
        this.listarDados()
    }
    ngAfterViewInit() {
         this.dataSource.paginator = this.paginator;
    }
    listarDados() {
         this.dataSource = new MatTableDataSource<Servico>(this.listaDados);
         this.dataSource.paginator = this.paginator;
    }
}