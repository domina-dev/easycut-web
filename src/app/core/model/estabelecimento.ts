import { Plano } from "./plano";
export class Estabelecimento{
	id?: number;
	nomeProprietario: string;
	estabelecimento: string;
	email: string;
	cpf_cnpj: string;
	senha: string;
	cadastroCompleto: boolean;
	enderecoID: number;
	planoID: number;
	plano: Plano;
  descricao?: string;
  celular?: string;
  telefone?: string;
}
