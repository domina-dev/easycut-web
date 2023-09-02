export class Plano {
  id: number;
  nome: string;
  preco: string;
  dsPlano: string;
  desconto: string;
  beneficios: Beneficio[];
}

export class Beneficio{
  id: number;
  codBeneficio: string;
  dsBeneficio: string;
  status: boolean;
  dtCriacao: Date;
  dtUltimaAtualizacao: Date;
}
