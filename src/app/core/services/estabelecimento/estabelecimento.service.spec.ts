/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { EstabelecimentoService } from './estabelecimento.service';

describe('Service: Estabelecimento', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstabelecimentoService]
    });
  });

  it('should ...', inject([EstabelecimentoService], (service: EstabelecimentoService) => {
    expect(service).toBeTruthy();
  }));
});
