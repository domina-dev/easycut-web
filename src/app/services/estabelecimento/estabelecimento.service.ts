import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {
  private readonly API = environment.url_api;

constructor(private httpClient: HttpClient) {}

  obterEstabelecimento(): Observable<Estabelecimento[]> {
    return this.http.get<Estabelecimento[]>(this.API)
  }
}


