import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private readonly API = '';

  constructor(private HttpClient: HttpClient) { }

  obterProdutos() {
    return this.HttpClient.get(this.API);
  }
}
