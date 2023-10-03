export interface Produto{
    id: number;
    codigo: null;
    nome: string;
    descricao: string;
    qtdEstoque: number;
    valor: number;
    valorPromocional: number;
    ativo: true;
    promocional: false;
    estabelecimentoID: number;
}