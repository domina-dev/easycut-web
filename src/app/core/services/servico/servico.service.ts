import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { take } from 'rxjs/internal/operators/take';
import { Servico } from '../../model/servicos';
import { CommomService } from '../commom/commom.service';


@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  private readonly API = environment.url_api;

  constructor(private http: HttpClient, private commonService: CommomService) { }

  obterServicos(): Observable<Servico[]> {
    return this.http.get<Servico[]>(`${this.API}/servicos/todos?estabelecimento_ID=4`);
  }

  filtroServico(campoFiltro: string, status: string, categoriaFiltro: string): Observable<Servico[]> {
    let estabelecimentoID = this.commonService.estabelecimentoId;
    return this.http.get<Servico[]>(`${this.API}/servicos/filtro`, {
      params: {
        estabelecimento_ID: estabelecimentoID,
        filtro: campoFiltro,
        status: status,
        categoria: categoriaFiltro,
      }
    }).pipe(take(1));
  }

  cadastrarServico(servico): Observable<Servico[]> {
    return this.http.post<Servico[]>(`${this.API}/servicos`, servico);
  }

  editarServico(servico: Servico): Observable<Servico[]> {
    return this.http.put<Servico[]>(`${this.API}/servicos`, servico).pipe(take(1));
  }

  deletarServico(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/servicos?servico_ID=${id}`)
  }
}
