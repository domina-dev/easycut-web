import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agendamentos } from 'src/app/pages/agendamentos/exibicao-agendamentos/exibicao-agendamentos.component';

@Injectable({
  providedIn: 'root'
})
export class AgendamentosService {
  private readonly API = 'environment.url_api';

  constructor(private http: HttpClient) {}

  obterAgendamentos(): Observable<Agendamentos[]> {
    return this.http.get<Agendamentos[]>(this.API);
  }
}
