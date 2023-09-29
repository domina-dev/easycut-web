import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmacaoComponent } from 'src/app/core/lib/components/modais/confirmacao/confirmacao.component';
import { CadastrarEditarServicoComponent } from 'src/app/core/lib/components/modais/servico/cadastrar-editar-servico/cadastrar-editar-servico.component';
import { ServicoService } from 'src/app/core/services/servico/servico.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  editarServico: CadastrarEditarServicoComponent

  @ViewChild(MatPaginator) paginator: MatPaginator;
  matDialogActions: any;

  constructor(public dialog: MatDialog,
    private servicoService: ServicoService,
    private snackbar: MatSnackBar) { }

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

  abrirModalEditar(servico: Servico): void {
    const dialogRef = this.dialog.open(CadastrarEditarServicoComponent, {
      data: {
        id: servico.id,
        nome: servico.nome,
        categoria: servico.categoria,
        codigo: servico.codigo,
        descricao: servico.descricao,
        tempoEstimado: servico.tempoEstimado,
        valor: servico.valor,
        valorPromocional: servico.valorPromocional,
        ativo: servico.ativo,
        promocional: servico.promocional,
        estabelecimentoID: servico.estabelecimentoID,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.editaServico(servico);
      }
    })
  }

  editaServico(servico: Servico): void {
    this.servicoService.editarServico(servico).subscribe(response => {
      this.listaServicos = response;
      this.dataSource = new MatTableDataSource<Servico>(this.listaServicos);
      this.dataSource.paginator = this.paginator;
      this.snackbar.open(
        "Servico alterado com sucesso",
        "Fechar",
        {
          duration: 10000
        }
      );
    }, (error) => {
      console.log(error)
      this.snackbar.open(
        "Servico não alterado",
        "Tenta novamente",
        {
          duration: 10000
        }
      );

    });
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

  vizualizar() {
    this.verLista = !this.verLista;
    this.verGrade = !this.verGrade;
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


