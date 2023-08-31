import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Servico } from '../../model/servicos';

@Injectable({
    providedIn: 'root'
})
export class ServicoService {
    private API = environment.url_api;

    constructor(private http: HttpClient) {}

    obterServico(): Observable<Servico[]> {
        return this.http.get<Servico[]>(this.API);
    }
}