/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { AgendamentosService } from './agendamentos.service';

describe('Service: Agendamentos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgendamentosService]
    });
  });

  it('should ...', inject([AgendamentosService], (service: AgendamentosService) => {
    expect(service).toBeTruthy();
  }));
});
