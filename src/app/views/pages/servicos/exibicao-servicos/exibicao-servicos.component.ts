import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmacaoComponent } from 'src/app/views/modais/confirmacao/confirmacao.component';
import { CadastrarEditarServicoComponent } from 'src/app/views/modais/servico/cadastrar-editar-servico/cadastrar-editar-servico.component';
import { ServicoService } from 'src/app/core/services/servico/servico.service';
@Component({
    selector: 'vex-exibicao-servicos',
    templateUrl: './exibicao-servicos.component.html',
    styleUrls: ['./exibicao-servicos.component.scss']
})
export class ExibicaoServicosComponent implements AfterViewInit, OnInit {

    displayedColumns: string[] = [
        'aplicacao',
        'servico',
        'descricao',
        'tempo',
        'preco',
        'icone'
    ];

    dataSource = new MatTableDataSource<Servico>();

    verLista: boolean = true;
    verGrade: boolean = false;
    listaServicos: Servico[] = [];

    @ViewChild(MatPaginator) paginator: MatPaginator;
    matDialogActions: any;

    constructor(public dialog: MatDialog,
        private servicoService: ServicoService) { }

    ngOnInit(): void { this.listarServicos() }

    listarServicos() {
        this.servicoService.obterServicos().subscribe(response => {
            this.listaServicos = response;
            this.dataSource = new MatTableDataSource<Servico>(this.listaServicos);
            this.dataSource.paginator = this.paginator;
        }, (error) => {
            console.log(error)
        });
    }

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
    abrirModalDeletar(servico: Servico): void {
        const dialogRef = this.dialog.open(ConfirmacaoComponent, {
          data: {
            titulo: `Tem certeza que deseja deletar o serviço: ${servico.nome}`
          }
        });
    
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            // Lógica para excluir o servico se o usuário confirmar
            this.excluirServico(servico);
          }
        });
      }
    
      excluirServico(servico: Servico): void {
        // Implemente a lógica para excluir o servico aqui
        // Chame seu serviço ou método para realizar a exclusão
      }
}

export interface Servico {
    id: number;
    nome: string;
    categoria: string;
    codigo: string;
    descricao: string;
    tempoEstimado: string;
    valor: number;
    valorPromocional: number;
    ativo: boolean;
    promocional: boolean;
    estabelecimentoID: number;
}


