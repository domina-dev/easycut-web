import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servico } from 'src/app/pages/servicos/exibicao-servicos/exibicao-servicos.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  private readonly API = environment.url_api;

  constructor(private http: HttpClient) { 

  }
  obterServicos():Observable<Servico[]>{
    return this.http.get<Servico[]>(`${this.API}/servicos/todos?estabelecimento_ID=4`);
  }
}

