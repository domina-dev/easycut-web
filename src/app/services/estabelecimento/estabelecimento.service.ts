import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {
  private readonly API = '';

constructor(private http: HttpClient) {}

  obterEstabelecimento() {
    return this.http.get(this.API)
  }
  recuperarSenha(): Observable<any> {
    // Implemente a lógica para recuperar a senha
    return this.http.get(this.API);
  }
}


