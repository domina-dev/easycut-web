import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Servico } from 'src/app/pages/servicos/exibicao-servicos/exibicao-servicos.component';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ServicoService {
  private readonly API = environment.url_api;

  constructor(private http: HttpClient) {}

  obterServicos():Observable<Servico[]>{
    return this.http.get<Servico[]>(`${this.API}/servicos/todos?estabelecimento_ID=4`);
  }

  cadastrarServico(Servico): Observable<Servico[]> {
    return this.http.post<Servico[]>(`${this.API}/servicos`, Servico);
  }



}

