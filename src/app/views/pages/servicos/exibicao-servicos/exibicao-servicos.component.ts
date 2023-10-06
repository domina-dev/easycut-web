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

  load: boolean = false;

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
    private servicoService: ServicoService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void { this.listarServicos() }

  listarServicos() {
    this.load = true;
    this.servicoService.obterServicos().subscribe(response => {
      this.listaServicos = response;
      this.dataSource = new MatTableDataSource<Servico>(this.listaServicos);
      this.dataSource.paginator = this.paginator;
      this.load = false;
    }, (error) => {
      this.load = false;
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

        this.deletarServico(servico);
      }
    });
  }

  deletarServico(servico: Servico): void {
    this.load = true;
    this.servicoService.deletarServico(servico.id).subscribe(
      () => {
        this.listarServicos();
        this.load = false;
        this.snackbar.open(
          'Serviço deletado com sucesso',
          'FECHAR',
          {
            duration: 5000
          }
        );

      },
      (error) => {
        this.load = false;
        console.error(error)
        this.snackbar.open(
          'Falha ao deletar serviço',
          'FECHAR',
          {
            duration: 5000
          }
        );
      }
    );
  }
  abrirModalPromocional(servico: Servico): void {
    let mensagem: string = ""
    if (servico.promocional) {
      mensagem = "Tem certeza que deseja retirar este serviço da promoção?"
    }
    else {
      mensagem = "Tem certeza que deseja tornar este serviço promocional?"

    }

    const dialogRef = this.dialog.open(ConfirmacaoComponent, {
      data: {
        titulo: mensagem
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        servico.promocional = !servico.promocional
        this.alterarServico(servico)

      }
    });
  }
  alterarServico(servico: Servico): void {
    this.load = true;
    this.servicoService.alterarServico(servico).subscribe(response => {
      this.listarServicos()
      this.load = false;
      this.snackbar.open(
        "Serviço alterado com sucesso",
        "Fechar",
        {
          duration: 3000
        }
      )
    }, (error) => {
      this.load = false;
      this.snackbar.open(
        "Não foi possível alterar o serviço",
        "Fechar",
        {
          duration: 3000
        }
      )
    });
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


