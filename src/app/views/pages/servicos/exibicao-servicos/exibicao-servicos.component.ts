import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmacaoComponent } from 'src/app/core/lib/components/modais/confirmacao/confirmacao.component';
import { CadastrarEditarServicoComponent } from 'src/app/core/lib/components/modais/servico/cadastrar-editar-servico/cadastrar-editar-servico.component';
import { ServicoService } from 'src/app/core/services/servico/servico.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Servico } from 'src/app/core/model/servicos'
import { MessagesSnackBar } from 'src/app/core/constants/messagesSnackBar';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  form: FormGroup;
  estabelecimentoID: number;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  matDialogActions: any;

  constructor(public dialog: MatDialog,
    private servicoService: ServicoService,
    private snackbar: MatSnackBar,
    private fb:FormBuilder) {

      this.form = fb.group({
        filtro: [''],
        categoria: [''],
        status: ['']
      })


    }

  ngOnInit(): void {

    this.listarServicos();

  }


  limparFiltro() {
    this.form.reset();
  }


  filtrarServicos() {
    this.load = true;
    let formulario = this.form.value;
    this.servicoService.filtroServico(formulario.filtro, formulario.status, formulario.categoria).subscribe(response => {
      this.listaServicos = response;
      this.dataSource = new MatTableDataSource<Servico>(this.listaServicos);
      this.dataSource.paginator = this.paginator;
      this.load = false;
    },
      (error) => {
        this.load = false;
        console.log(error)
      });
  }


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

  modalCadastrarEditar(servico?: Servico) {
    const dialogRef = this.dialog.open(CadastrarEditarServicoComponent, {
      data: {
          servico: servico
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.listarServicos();
      }
    });
  }

  abrirModalDeletar(servico: Servico): void {
    const dialogRef = this.dialog.open(ConfirmacaoComponent, {
      data: {
        itens: [servico.nome],
        legendaAcao: MessagesSnackBar.CONFIRMAR_EXCLUIR
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
          MessagesSnackBar.DELETAR_SERVICO,
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
          MessagesSnackBar.ERRO_DELETAR_SERVICO,
          'FECHAR',
          {
            duration: 5000
          }
        );
      }
    );
  }

  abrirModalOcultar(servico: Servico): void {
    let mensagem:string = ""
    if (servico.ativo) {
        mensagem = "Tem certeza que deseja ocultar este serviço?"
    }
    else {
        mensagem = "Tem certeza que deseja mostrar este serviço?"

    }

    const dialogRef = this.dialog.open(ConfirmacaoComponent, {
        data: {
          itens: [servico.nome],
          legendaAcao: mensagem
        }
    });
    dialogRef.afterClosed().subscribe(result => {
        if (result) {
            servico.ativo = !servico.ativo
            this.alterarServico(servico)

        }
    });
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
        itens: [servico.nome],
        legendaAcao: mensagem
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
    this.servicoService.editarServico(servico).subscribe(() => {
      this.listarServicos()
      this.load = false;
      this.snackbar.open(
        MessagesSnackBar.EDITAR_SERVICO,
        "Fechar",
        {
          duration: 3000
        }
      )
    }, (error) => {
      this.load = false;
      this.snackbar.open(
        MessagesSnackBar.ERRO_EDITAR_SERVICO,
        "Fechar",
        {
          duration: 3000
        }
      )
    });

  }

  visualizar() {
    this.verLista = !this.verLista;
    this.verGrade = !this.verGrade;
  }
}




