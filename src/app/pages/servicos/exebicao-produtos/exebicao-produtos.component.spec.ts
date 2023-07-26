import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExebicaoProdutosComponent } from './exebicao-produtos.component';

describe('ExebicaoProdutosComponent', () => {
  let component: ExebicaoProdutosComponent;
  let fixture: ComponentFixture<ExebicaoProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExebicaoProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExebicaoProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
