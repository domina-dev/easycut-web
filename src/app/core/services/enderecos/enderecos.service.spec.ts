import { TestBed } from '@angular/core/testing';

import { EnderecosService } from './enderecos.service';

describe('EnderecosService', () => {
  let service: EnderecosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnderecosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
