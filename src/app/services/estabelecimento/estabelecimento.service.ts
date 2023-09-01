import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Estabelecimento } from 'src/app/model/estabelecimento'
@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {
  private readonly API = environment.url_api;

constructor(private http: HttpClient) {}

  obterEstabelecimento(): Observable<Estabelecimento[]> {
    return this.http.get<Estabelecimento[]>(this.API)
  }
  recuperarSenha(): Observable<any> {
    // Implemente a lógica para recuperar a senha
    return this.http.get(this.API);
  }

  recuperacaoSenha(email: string): Observable<any> {
    return this.http.get<any>(`${this.API}/estabelecimento/recuperacao`, {
    params: { email: email }, observe: "response",
    });
    }

}


