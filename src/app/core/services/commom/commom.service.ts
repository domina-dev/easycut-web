import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Estabelecimento } from '../../model/estabelecimento';

@Injectable({
  providedIn: 'root'
})
export class CommomService {

    estabelecimentoId: number = +window.localStorage.getItem("estabelecimento_ID");
    estabelecimento: Estabelecimento = this.estabelecimentoSessao();

    constructor(public http: HttpClient) {}

    healthCheck(): Observable<any> {
        return this.http
            .get(`${environment.url_api}/health-check`, { observe: 'response' })
            .pipe(take(1));
    }

    estabelecimentoSessao(): Estabelecimento{
        this.estabelecimento = JSON.parse(window.localStorage.getItem('estabelecimentoLogado'))
        return this.estabelecimento;
    }

    buscarViaCep(cep: string): Observable<any> {
      return this.http.get<any>(`https://viacep.com.br/ws/${cep}/json`);
    }
}
