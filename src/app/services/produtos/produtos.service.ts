import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/pages/servicos/exibicao-produtos/exibicao-produtos.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private url = environment.url_api;

  constructor(private http: HttpClient) { }

  obterProduto(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url);
  }
}
 