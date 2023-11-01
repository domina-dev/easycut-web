import { Venda } from './../../../../core/model/nova-venda';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DescontoComponent } from 'src/app/core/lib/components/modais/desconto/desconto.component';
import { Produto } from 'src/app/core/model/produto';
import { Servico } from 'src/app/core/model/servicos';
import { ProdutoService } from 'src/app/core/services/produtos/produtos.service';
import { ServicoService } from 'src/app/core/services/servico/servico.service';

@Component({
  selector: 'vex-nova-venda',
  templateUrl: './nova-venda.component.html',
  styleUrls: ['./nova-venda.component.scss']
})
export class NovaVendaComponent implements OnInit {

  @Output() trocaTab: EventEmitter<any> = new EventEmitter();

  form: FormGroup;
  selectedmenu: string = 'Serviços';
  menus: string[] = ['Serviços', 'Produtos'];
  servicos: boolean;
  subTotal: number = 0;
  desconto: number = 0;
  total: number = 0;

  public venda = new Venda();

  tasks: Servico[] = [];

  products: Produto[] = [];

  selectedTasks: Servico[] = [];

  selectedProducts: Produto[] = [];

  itensVenda: Produto[] | Servico[] = [];

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private servicoService: ServicoService,
    private produtoService: ProdutoService
  ) {
    this.form = this.fb.group({
      responsavelVenda: ['', Validators.required],
      cliente: ['', Validators.required],
      pagamento: ['', Validators.required],
      parcelamento: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.listarTaks();
    this.listarProducts();
  }

  somaValores(qtdSelecionada? : number, itenVenda? : Produto | Servico) {
    if (itenVenda) itenVenda.qtdSelecionada = qtdSelecionada
    let soma = 0;
    this.itensVenda = this.selectedTasks.concat(this.selectedProducts)
    this.itensVenda.forEach(element => {
      soma += (element.valor * (+element.qtdSelecionada || 1))
    });
    this.subTotal = soma
    this.total = this.subTotal - this.desconto
  }

  openModalDesconto() {
    this.dialog.open(DescontoComponent, {
      data: {
        animal: 'panda',
      },
    });
  }

  trocarTab() {
    this.trocaTab.emit({ data: 1 });
  }

  listarTaks() {
    this.servicoService.obterServicos().subscribe(response => {
      this.tasks = response;
    })
  }

  listarProducts() {
    this.produtoService.obterProdutos().subscribe(response => {
      this.products = response;
    })
  }
}
