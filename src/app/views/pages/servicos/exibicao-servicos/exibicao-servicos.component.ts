import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmacaoComponent } from 'src/app/core/lib/components/modais/confirmacao/confirmacao.component';
import { CadastrarEditarServicoComponent } from 'src/app/core/lib/components/modais/servico/cadastrar-editar-servico/cadastrar-editar-servico.component';
import { ServicoService } from 'src/app/core/services/servico/servico.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Servico } from 'src/app/core/model/servicos'

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

  modalCadastrarEditar(servico?: Servico) {
    const dialogRef = this.dialog.open(CadastrarEditarServicoComponent, {
      data: {
          servico: servico
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Lógica para excluir o servico se o usuário confirmar
        this.listarServicos();
      }
    });
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
        this.deletarServico(servico);
      }
    });
  }

  deletarServico(servico: Servico): void {
    this.servicoService.deletarServico(servico.id).subscribe(
      () => {
        this.listarServicos();
        this.snackbar.open(
          'Serviço deletado com sucesso',
          'FECHAR',
          {
            duration: 5000
          }
        );

      },
      (error) => {
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
        this.editaServico(servico)

      }
    });
  }

  vizualizar() {
    this.verLista = !this.verLista;
    this.verGrade = !this.verGrade;
  }
}




