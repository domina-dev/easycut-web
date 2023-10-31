import { Venda } from './../../../../core/model/nova-venda';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DescontoComponent } from 'src/app/core/lib/components/modais/desconto/desconto.component';
import { Produto } from 'src/app/core/model/produto';
import { Servico } from 'src/app/core/model/servicos';

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

  tasks: Servico[] = [
    {
      id: 1,
      imagem: 'https://i.pinimg.com/564x/a0/c1/fa/a0c1fa1f2c55ee6efa2e034c6a2d0fd0.jpg',
      descricao: 'Corte Simples',
      valor: 30,
      qtdSelecionada: 1
    },
    {
      id: 2,
      imagem: 'https://blog.newoldman.com.br/wp-content/uploads/2019/10/Risco-na-Sobrancelha-1.jpg',
      descricao: 'Corte + Sombrancelha',
      valor: 45,
      qtdSelecionada: 1
    },
    {
      id: 3,
      imagem: 'https://tudocommoda.com/wp-content/uploads/2017/12/topete-masculino-crespo9.jpg',
      descricao: 'Corte + Barba',
      valor: 60,
      qtdSelecionada: 1
    },
    {
      id: 4,
      imagem: 'https://4.bp.blogspot.com/-aQR_jLm-lbg/W-Kzkh_owTI/AAAAAAABOKg/30u74pOx4B02kYLVtVUHG98I-ict1dklQCLcBGAs/s1600/barba-cheia%2B%252810%2529.jpg',
      descricao: 'Barba',
      valor: 30,
      qtdSelecionada: 1
    },
  ];

  products: Produto[] = [
    {
      id: 5,
      imagem: 'https://dcdn.mitiendanube.com/stores/001/276/872/products/pomada-barba-e-cabelo-barbaros1-46f70d07beecdfb85116301659219117-640-0.jpg',
      descricao: 'Pomada Modeladora',
      valor: 35,
      qtdSelecionada: 1
    },
    {
      id: 6,
      imagem: 'https://cdn.awsli.com.br/600x1000/560/560895/produto/206568650/post-para-instagram-promocao-dia-dos-namorados-rosa-fwfafp.jpg',
      descricao: 'Kit para Barba',
      valor: 60,
      qtdSelecionada: 1
    },
    {
      id: 7,
      imagem: 'https://cdn.sistemawbuy.com.br/arquivos/f6d96e320badbbbf9a53dc4407c6830f/produtos/MOU5GUA5/1cx-nv-6468d7d7709eb.jpg',
      descricao: 'Minoxidil Kirkland',
      valor: 120,
      qtdSelecionada: 1
    },
    {
      id: 8,
      imagem: 'https://www.padariavianney.com.br/web/image/product.template/3649/image_1024?unique=49a641d',
      descricao: 'Cerveja 355ml ',
      valor: 6,
      qtdSelecionada: 1
    },
  ];

  selectedTasks: Servico[] = [];
  selectedProducts: Produto[] = [];

  itensVenda: Produto[] | Servico[] = [];

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {
    this.form = this.fb.group({
      responsavelVenda: ['', Validators.required],
      cliente: ['', Validators.required],
      pagamento: ['', Validators.required],
      parcelamento: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    console.log('Method not implemented');
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
}
