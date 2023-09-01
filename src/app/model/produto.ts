export interface Produto {
    id: number,
    codigo: string,
    nome: string,
    descricao: string,
    qtdEstoque: number,
    valor: string,
    valorPromocional: string,
    ativo: boolean,
    promocional: boolean,
    estabelecimentoID: number
}