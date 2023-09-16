import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Produto } from 'src/app/pages/servicos/exibicao-produtos/exibicao-produtos.component';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private readonly API = environment.url_api;

  constructor(private http: HttpClient) { }

  obterProdutosDoBackEnd():Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.API}/produtos`);
  }

  deletaProduto():Observable<Produto[]>{
    return this.http.delete<Produto[]>(`${this.API}/produtos?produto_ID=8`);
  }






}
