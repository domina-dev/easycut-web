import { Venda } from './../../../../core/model/nova-venda';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface Section1 {
  idServico: number;
  corte: string;
  descricao: string;
  valor: number;
}
export interface Section2 {
  idProduto: number;
  produto: string;
  descricao: string;
  valor: number;
}

@Component({
  selector: 'vex-nova-venda',
  templateUrl: './nova-venda.component.html',
  styleUrls: ['./nova-venda.component.scss']
})
export class NovaVendaComponent implements OnInit {
  form: FormGroup;
  selectedmenu: string;
  menus: string[] = ['Serviços', 'Produtos'];
  servicos: boolean;

  public venda = new Venda();

  tasks: Section1[] = [
    {
      idServico: 1,
      corte: 'https://i.pinimg.com/564x/a0/c1/fa/a0c1fa1f2c55ee6efa2e034c6a2d0fd0.jpg',
      descricao: 'Corte Simples',
      valor: 30,
    },
    {
      idServico: 2,
      corte: 'https://blog.newoldman.com.br/wp-content/uploads/2019/10/Risco-na-Sobrancelha-1.jpg',
      descricao: 'Corte + Sombrancelha',
      valor: 45,
    },
    {
      idServico: 3,
      corte: 'https://tudocommoda.com/wp-content/uploads/2017/12/topete-masculino-crespo9.jpg',
      descricao: 'Corte + Barba',
      valor: 60,
    },
    {
      idServico: 4,
      corte: 'https://4.bp.blogspot.com/-aQR_jLm-lbg/W-Kzkh_owTI/AAAAAAABOKg/30u74pOx4B02kYLVtVUHG98I-ict1dklQCLcBGAs/s1600/barba-cheia%2B%252810%2529.jpg',
      descricao: 'Barba',
      valor: 30,
    },
  ];

  products: Section2[] = [
    {
      idProduto: 1,
      produto: 'https://dcdn.mitiendanube.com/stores/001/276/872/products/pomada-barba-e-cabelo-barbaros1-46f70d07beecdfb85116301659219117-640-0.jpg',
      descricao: 'Pomada Modeladora',
      valor: 35,
    },
    {
      idProduto: 2,
      produto: 'https://cdn.awsli.com.br/600x1000/560/560895/produto/206568650/post-para-instagram-promocao-dia-dos-namorados-rosa-fwfafp.jpg',
      descricao: 'Kit para Barba',
      valor: 60,
    },
    {
      idProduto: 3,
      produto: 'https://cdn.sistemawbuy.com.br/arquivos/f6d96e320badbbbf9a53dc4407c6830f/produtos/MOU5GUA5/1cx-nv-6468d7d7709eb.jpg',
      descricao: 'Minoxidil Kirkland',
      valor: 120,
    },
    {
      idProduto: 4,
      produto: 'https://www.padariavianney.com.br/web/image/product.template/3649/image_1024?unique=49a641d',
      descricao: 'Cerveja 355ml ',
      valor: 6,
    },
  ];

  constructor(
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      vendedor: ['', Validators.required],
      cliente: ['', Validators.required]
    });
  }

  if(_favoriteSeason = 'Serviços') {
    this.servicos = true
  };


  ngOnInit(): void {
    console.log('Method not implemented');
  }
}
