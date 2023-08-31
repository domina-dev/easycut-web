import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {
  private readonly API = environment.url_api;

constructor(private http: HttpClient) {}

  obterEstabelecimento() {
    return this.http.get(this.API)
  }

  recuperacaoSenha(email: string): Observable<any> {
    return this.http.get<any>(`${this.API}/estabelecimento/recuperacao`, {
    params: { email: email }, observe: "response",
    });
    }

}


