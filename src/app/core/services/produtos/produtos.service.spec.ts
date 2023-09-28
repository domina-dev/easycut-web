/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { ProdutoService } from './produtos.service';

describe('Service: ObterProdutos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProdutoService]
    });
  });

  it('should ...', inject([ProdutoService], (service: ProdutoService) => {
    expect(service).toBeTruthy();
  }));
});
