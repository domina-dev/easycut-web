import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  private url = environment.url_api;

  constructor(
    private HttpClient: HttpClient
    ){}

  obterServico(): Observable<Servico[]> {
    return this.HttpClient.get<Servico[]>(this.url);
  }
  
}


