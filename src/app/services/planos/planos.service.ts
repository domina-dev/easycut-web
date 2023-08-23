import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Planos } from 'src/app/model/planos'

@Injectable({
  providedIn: 'root'
})
export class PlanosService {

  private readonly API = environment.url_vitor;

  constructor(private httpClient: HttpClient) { }

   obterPlanos():Observable<Planos[]>{
    return this.httpClient.get<Planos[]>(`${this.API}/planos`);
  }
}

