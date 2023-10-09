import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CadastrarProdutoComponent } from 'src/app/core/lib/components/modais/produto/cadastrar-produto/cadastrar-produto.component';
import { Produto } from 'src/app/core/model/produto'
import { ProdutoService } from 'src/app/core/services/produtos/produtos.service'
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmacaoComponent } from 'src/app/core/lib/components/modais/confirmacao/confirmacao.component';
import { MessagesSnackBar } from 'src/app/core/constants/messagesSnackBar';


@Component({
  selector: 'vex-exibicao-produtos',
  templateUrl: './exibicao-produtos.component.html',
  styleUrls: ['./exibicao-produtos.component.scss']
})
export class ExibicaoProdutosComponent implements AfterViewInit, OnInit {

  load: boolean = false;

  displayedColumns: string[] = [
    'nomeProduto',
    'descricao',
    'quantidade',
    'preco',
    'icone'
  ];

  listaProduto: Produto[] = []

  dataSource = new MatTableDataSource<Produto>();

  verLista: boolean = true;
  verGrade: boolean = false;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.listarProdutos();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog, private produtoService: ProdutoService,
    private snackbar: MatSnackBar) { }

  listarProdutos() {
    this.load = true;
    this.produtoService.obterProdutos().subscribe(response => {
      this.listaProduto = response;
      this.dataSource = new MatTableDataSource<Produto>(this.listaProduto);
      this.dataSource.paginator = this.paginator;
      this.load = false;
    },
      (error) => {
        this.load = false;
        console.log(error)
      });
  }

        });
    }

    openAdd() {
        this.dialog.open(CadastrarProdutoComponent);
    }
    abrirModalDeletar(produto: Produto): void {
        const dialogRef = this.dialog.open(ConfirmacaoComponent, {
            data: {
                titulo: `Tem certeza que deseja deletar o produto: ${produto.nome}`
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.deletarProduto();
            }
        });
    }

    visualizar() {
        this.verLista = !this.verLista;
        this.verGrade = !this.verGrade;
    }
    abrirModalOcultar(produto: Produto): void {
        let mensagem:string = ""
        if (produto.ativo) {
            mensagem = "Tem certeza que deseja ocultar este produto?"
        }
        else {
            mensagem = "Tem certeza que deseja mostrar este produto?"

        }

        const dialogRef = this.dialog.open(ConfirmacaoComponent, {
            data: {
                titulo: mensagem
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                produto.ativo = !produto.ativo
                this.alterarProduto(produto)

            }
        });
    }
    
    abrirModalPromocional(produto: Produto): void {
        let mensagem:string = ""
        if (produto.promocional) {
            mensagem = "Tem certeza que deseja retirar este produto da promoção?"
  deletarProduto() {
    this.load = true;
    this.produtoService.deletaProduto().subscribe(response => {
      this.listaProduto = response;
      this.dataSource = new MatTableDataSource<Produto>(this.listaProduto);
      this.dataSource.paginator = this.paginator;
      this.load = false;
      this.snackbar.open(
        MessagesSnackBar.DELETAR_PRODUTO,
        "Fechar",
        {
          duration: 10000
        }
      );
    }, (error) => {
      this.load = false;
      console.log(error)
      this.snackbar.open(
        MessagesSnackBar.ERRO_DELETAR_PRODUTO,
        "Tenta novamente",
        {
          duration: 10000
        }
      );

    });
  }

  openAdd() {
    this.dialog.open(CadastrarProdutoComponent);
  }
  
  abrirModalDeletar(produto: Produto): void {
    const dialogRef = this.dialog.open(ConfirmacaoComponent, {
      data: {
        itens: [produto.nome],
        legendaAcao: MessagesSnackBar.CONFIRMAR_EXCLUIR
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deletarProduto();
      }
    });
  }

  visualizar() {
    this.verLista = !this.verLista;
    this.verGrade = !this.verGrade;
  }

  abrirModalPromocional(produto: Produto): void {
    let mensagem: string = ""
    if (produto.promocional) {
      mensagem = "Tem certeza que deseja retirar este produto da promoção?"
    }
    else {
      mensagem = "Tem certeza que deseja tornar este produto promocional?"

    }

    const dialogRef = this.dialog.open(ConfirmacaoComponent, {
      data: {
        itens: [produto.nome],
        legendaAcao: mensagem
      }

    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        produto.promocional = !produto.promocional
        this.alterarProduto(produto)

      }
    });
  }

  alterarProduto(produto: Produto): void {
    this.load = true;
    this.produtoService.alterarProduto(produto).subscribe(response => {
      this.listarProdutos()
      this.load = false;
      this.snackbar.open(
        MessagesSnackBar.EDITAR_PRODUTO,
        "Fechar",
        {
          duration: 3000
        }

      )
    }, (error) => {
      this.load = false;
      this.snackbar.open(
        MessagesSnackBar.ERRO_EDITAR_PRODUTO,
        "Fechar",
        {
          duration: 3000
        }
      )
    });
  }
}
