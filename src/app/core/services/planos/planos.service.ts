import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Plano } from 'src/app/core/model/plano'

@Injectable({
  providedIn: 'root'
})
export class PlanosService {

  private readonly API = environment.url_api;

  constructor(private http: HttpClient) { }

   obterPlanos():Observable<Plano[]>{
    return this.http.get<Plano[]>(`${this.API}/planos`);
  }
}
