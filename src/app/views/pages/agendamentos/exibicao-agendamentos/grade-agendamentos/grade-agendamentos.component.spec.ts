import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeAgendamentosComponent } from './grade-agendamentos.component';

describe('GradeAgendamentosComponent', () => {
  let component: GradeAgendamentosComponent;
  let fixture: ComponentFixture<GradeAgendamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeAgendamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeAgendamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
