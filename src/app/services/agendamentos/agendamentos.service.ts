import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgendamentosService {
  private readonly API = '';

  constructor(private http: HttpClient) {}

  obterAgendamentos() {
    return this.http.get(this.API);
  }
}
