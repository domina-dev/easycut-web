export class Produto{
    id?: number;
    codigo?: string;
    nome?: string;
    descricao?: string;
    qtdEstoque?: number;
    valor?: number;
    valorPromocional?: number;
    ativo?: boolean;
    promocional?: boolean;
    estabelecimentoID?: number;
    imagem?: string;
    qtdSelecionada?: number;
}