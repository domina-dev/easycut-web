export class Venda {
estabelecimento?: string;
responsavelVenda?: string;
cliente?: string;
idServico?: number;
idProduto?: number;
pagamento?: string;
parcelamento?: string;
data?: string;
qtd?: number;
valor?: string;
detalhes?: Detalhes[];
}

export class Detalhes{
  detalheNome?: string;
  detalheQtd?: number;
  detalheValor?: string;
  status?: string;
}
