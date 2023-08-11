import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "vex-exibicao-servicos",
  templateUrl: "./exibicao-servicos.component.html",
  styleUrls: ["./exibicao-servicos.component.scss"],
})
export class ExibicaoServicosComponent implements AfterViewInit {
  displayedColumns: string[] = [
    "aplicacao",
    "servico",
    "descricao",
    "tempo",
    "preco",
    "icone",
  ];
  dataSource = new MatTableDataSource<ListaServicos>(ELEMENT_DATA);

  verLista: boolean = true;
  verGrade: boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  vizualizar() {
    this.verLista = !this.verLista;
    this.verGrade = !this.verGrade;
  }
}

export interface ListaServicos {
  aplicacao: string;
  servico: string;
  descricao: string;
  tempo: string;
  preco: string;
  icone: string;
}

const ELEMENT_DATA: ListaServicos[] = [
  {
    aplicacao: "Cabelo",
    servico: "Corte simples",
    descricao: "Corte de cabelo masculino simples",
    tempo: "30 min-50min",
    preco: "R$ 30,00",
    icone: "",
  },
  {
    aplicacao: "Cabelo",
    servico: "Corte simples",
    descricao: "Corte de cabelo masculino simples",
    tempo: "30 min-50min",
    preco: "R$ 30,00",
    icone: "",
  },
  {
    aplicacao: "Cabelo",
    servico: "Corte simples",
    descricao: "Corte de cabelo masculino simples",
    tempo: "30 min-50min",
    preco: "R$ 30,00",
    icone: "",
  },
  {
    aplicacao: "Cabelo",
    servico: "Corte simples",
    descricao: "Corte de cabelo masculino simples",
    tempo: "30 min-50min",
    preco: "R$ 30,00",
    icone: "",
  },
  {
    aplicacao: "Cabelo",
    servico: "Corte simples",
    descricao: "Corte de cabelo masculino simples",
    tempo: "30 min-50min",
    preco: "R$ 30,00",
    icone: "",
  },
  {
    aplicacao: "Cabelo",
    servico: "Corte simples",
    descricao: "Corte de cabelo masculino simples",
    tempo: "30 min-50min",
    preco: "R$ 30,00",
    icone: "",
  },
  {
    aplicacao: "Cabelo",
    servico: "Corte simples",
    descricao: "Corte de cabelo masculino simples",
    tempo: "30 min-50min",
    preco: "R$ 30,00",
    icone: "",
  },
  {
    aplicacao: "Cabelo",
    servico: "Corte simples",
    descricao: "Corte de cabelo masculino simples",
    tempo: "30 min-50min",
    preco: "R$ 30,00",
    icone: "",
  },
];
