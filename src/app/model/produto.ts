export interface Produto{
    [x: string]: any;
    codProduto: null,
    nomeProduto: string,
    dsProduto: string,
    qtdEstoque: number,
    valor: number,
    valorPromocional: number,
    ativo: true,
    promocional: false,
    estabelecimentoID: number
}