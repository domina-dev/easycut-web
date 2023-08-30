import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromocoesService {
  private apiUrl = environment.url_api;
  api: any;

  constructor(
    private http: HttpClient
  ) { }

  obterPromocoes(): Observable<any> {
    return this.http.get<any>(`${this.api}/promocoes`, { observe: "response" });
  }
}
