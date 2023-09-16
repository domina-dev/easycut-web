import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private readonly API = environment.url_api;

  constructor(private http: HttpClient) { }

  obterProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.API}/produtos/todos?estabelecimento_ID=4`);
  }

  deletaProduto():Observable<Produto[]>{
    return this.http.delete<Produto[]>(`${this.API}/produtos?produto_ID=8`);
  }






}
