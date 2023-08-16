/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ObterProdutosService } from './obterProdutos.service';

describe('Service: ObterProdutos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObterProdutosService]
    });
  });

  it('should ...', inject([ObterProdutosService], (service: ObterProdutosService) => {
    expect(service).toBeTruthy();
  }));
});
