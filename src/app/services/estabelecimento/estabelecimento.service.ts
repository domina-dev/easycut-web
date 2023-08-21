import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {
  private readonly API = '';

constructor(private http: HttpClient) {}

  obterEstabelecimento() {
    return this.http.get(this.API)
  }
}


