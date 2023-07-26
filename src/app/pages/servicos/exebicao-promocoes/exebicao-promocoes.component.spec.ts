import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExebicaoPromocoesComponent } from './exebicao-promocoes.component';

describe('ExebicaoPromocoesComponent', () => {
  let component: ExebicaoPromocoesComponent;
  let fixture: ComponentFixture<ExebicaoPromocoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExebicaoPromocoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExebicaoPromocoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
