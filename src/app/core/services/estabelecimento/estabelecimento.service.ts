import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Estabelecimento } from 'src/app/core/model/estabelecimento'
import { take } from 'rxjs/operators';
import { CommomService } from '../commom/commom.service';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService extends CommomService{
  private readonly API = environment.url_api;

  constructor(public http: HttpClient) {
    super(http);
   }

  obterEstabelecimento(): Observable<Estabelecimento[]> {
    return this.http.get<Estabelecimento[]>(this.API)
  }

  recuperacaoSenha(email: string): Observable<any> {
    return this.http.get<any>(`${this.API}/estabelecimento/recuperacao`, {
      params: { email: email }, observe: "response",
    });
  }

  saveUsuario(body: any) {
    return this.http.post<any>(`${this.API}/login`, body)
  }

  contratar(estabelecimento_ID: number, plano_ID: number): Observable<any> {
    const body = {
      estabelecimento_ID: estabelecimento_ID,
      plano_ID: plano_ID
    };
    const url = `${this.API}/planos`;
    return this.http.post(url, body)
  }

  cadastrarEstabelecimento(estabelecimentoData: Estabelecimento): Observable<Estabelecimento> {
    console.log(estabelecimentoData)
    // Faz a requisição HTTP POST para a rota de cadastro de estabelecimento
    return this.http.post<Estabelecimento>(`${this.API}/estabelecimento`, estabelecimentoData);
  }

  obterEstabelecimentoPeloId(): Observable<Estabelecimento> {
    return this.http.get<Estabelecimento>(`${environment.url_api}/estabelecimento`, {
        params: { id: this.estabelecimentoId}}).pipe(take(1))
  }

  alterarCadastro(estabelecimento : Estabelecimento): Observable<Estabelecimento> {
    return this.http.put<Estabelecimento>(`${this.API}/estabelecimento`,estabelecimento)
  }

}
