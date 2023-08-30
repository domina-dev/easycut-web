import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/model/produto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private readonly API = environment.url_api;;

  constructor(private HttpClient: HttpClient) {}

  obterProdutos(): Observable<Produto[]> {
    return this.HttpClient.get<Produto[]>(this.API);
  }
}
