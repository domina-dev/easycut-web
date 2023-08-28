import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservas } from 'src/app/model/reservas';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  private readonly API = 'environment.url_api';

  constructor(private http: HttpClient) { }

  obterReservas(): Observable<Reservas[]> {
    return this.http.get<Reservas[]>(this.API);
  }


}
