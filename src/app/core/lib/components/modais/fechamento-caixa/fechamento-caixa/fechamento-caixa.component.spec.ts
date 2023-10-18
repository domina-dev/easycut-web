/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FechamentoCaixaComponent } from './fechamento-caixa.component';

describe('FechamentoCaixaComponent', () => {
  let component: FechamentoCaixaComponent;
  let fixture: ComponentFixture<FechamentoCaixaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FechamentoCaixaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FechamentoCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
