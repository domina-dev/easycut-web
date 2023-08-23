import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Produto } from 'src/app/pages/servicos/exibicao-produtos/exibicao-produtos.component';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private readonly API = environment.url_vitor ;

  constructor(private httpClient: HttpClient) { }

  obterProdutosDoBackEnd():Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(`${this.API}/produtos`);
  }
}
