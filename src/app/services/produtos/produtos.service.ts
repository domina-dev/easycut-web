import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { Produto } from 'src/app/model/produto';
=======
import { Produto } from 'src/app/pages/servicos/exibicao-produtos/exibicao-produtos.component';
>>>>>>> f96a97892f6e86c894500991586c8c2c9ab3c4ed
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD

export class ProdutoService {
  private readonly API = 'http://localhost:4200/servicos';

  constructor(private HttpClient: HttpClient) {}

  obterProdutos(): Observable<Produto[]> {
    return this.HttpClient.get<Produto[]>(this.API);
=======
export class ProdutosService {
  private url = environment.url_api;

  constructor(private http: HttpClient) { }

  obterProduto(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url);
>>>>>>> f96a97892f6e86c894500991586c8c2c9ab3c4ed
  }
}
 