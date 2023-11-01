import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from 'src/app/core/model/produto';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';
import { CommomService } from '../commom/commom.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private readonly API = environment.url_api;

  estabelecimentoID = this.commonService.estabelecimentoId;

  constructor(private http: HttpClient, private commonService: CommomService) { }

  obterProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.API}/produtos/todos?estabelecimento_ID=${this.estabelecimentoID}`);
  }

  deletaProduto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/produtos?produto_ID=${id}`);
  }

  cadastrarProduto(Produto): Observable<Produto[]> {
    return this.http.post<Produto[]>(`${this.API}/produtos`, Produto);
  }

  alterarProduto(produto: Produto): Observable<Produto[]> {
    return this.http.put<Produto[]>(`${this.API}/produtos`, produto).pipe(take(1));

  }

  filtroProduto(campoFiltro: string, status: string, categoriaFiltro: string): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.API}/produtos/filtro`, {
      params: {
        estabelecimento_ID: this.estabelecimentoID,
        filtro: campoFiltro,
        status: status,
        categoria: categoriaFiltro,
      }
    }).pipe(take(1));
  }
}
