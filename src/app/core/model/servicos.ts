export interface Servico {
    id: number;
    nome: string;
	categoria: string;
	codigo: string;
	descricao: string;
	tempoEstimado: string;
	valor: string;
	valorPromocional: string;
	ativo: boolean;
	promocional: boolean;
	estabelecimentoID: number
}