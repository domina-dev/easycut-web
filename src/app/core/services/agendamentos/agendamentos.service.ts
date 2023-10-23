import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agendamento } from 'src/app/core/model/agendamento';
import { environment } from 'src/environments/environment';
import { CommomService } from '../commom/commom.service';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {
  private readonly API = environment.url_api;

  constructor(private http: HttpClient, private commonService: CommomService ) {}

  getAgendamentos(): Observable<Agendamento[]> {
    let estabelecimentoID = this.commonService.estabelecimentoId;
    return this.http.get<Agendamento[]>(`${this.API}/agendamentos/todos`, {
      params: { estabelecimento_ID: estabelecimentoID}
    });
  }
  
  getAgendamentosDia(): Observable<Agendamento[]> {
    return this.http.get<Agendamento[]>(`${this.API}/agendamentos/hoje?estabelecimento_ID=4`);
  }

  CadastraAgendamentos(agendamento: Agendamento): Observable<Agendamento> {
    return this.http.post<Agendamento>(`${this.API}/agendamentos`, agendamento);
  }

  alterarAgendamento(agendamento: Agendamento): Observable<Agendamento> {
    return this.http.put<Agendamento>(`${this.API}/agendamentos`,agendamento)
  }

  deletarAgendamento(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API}/agendamentos?agendamento_ID=${id}`);
  }
}
