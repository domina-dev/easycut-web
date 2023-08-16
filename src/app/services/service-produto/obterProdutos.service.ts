import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObterProdutosService {
  private readonly API = '';

  constructor(private HttpClient: HttpClient) { }

  list() {
    return this.HttpClient.get(this.API);
  }
}
