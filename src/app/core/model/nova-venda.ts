export class Venda {
estabelecimento?: string;
responsavelVenda?: string;
cliente?: string;
idServico?: number;
idProduto?: number;
pagamento?: string;
parcelamento?: string;

Data?: string;
Cliente?: string;
Qtd?: number;
Valor?: string;
detalhes?: Detalhes[];
}

export class Detalhes{
  detalheNome?: string;
  detalheQtd?: number;
  detalheValor?: string;
}
