import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reserva } from 'src/app/model/reservas';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  private readonly API = environment.url_api;

  constructor(private http: HttpClient) { }

  obterReservas(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(this.API);
  }


}
