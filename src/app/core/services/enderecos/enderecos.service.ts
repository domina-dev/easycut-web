import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Endereco } from '../../model/endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  private readonly API = environment.url_api;

  constructor(private http: HttpClient) {}

  cadastraEndereco(endereco: Endereco): Observable<Endereco> {
    return this.http.post<Endereco>(`${this.API}/endereco`, endereco);
  }
}
