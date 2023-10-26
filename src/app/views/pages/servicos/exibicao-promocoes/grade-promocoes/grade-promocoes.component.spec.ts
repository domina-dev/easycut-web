import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradePromocoesComponent } from '././grade-promocoes.component';

describe('GradePromocoesComponent', () => {
  let component: GradePromocoesComponent;
  let fixture: ComponentFixture<GradePromocoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradePromocoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradePromocoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
