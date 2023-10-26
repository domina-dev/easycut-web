import { TestBed } from '@angular/core/testing';

import { PromocoesService } from './promocoes.service';

describe('PromocoesService', () => {
  let service: PromocoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromocoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
