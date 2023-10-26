import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeReservasComponent } from './grade-reservas.component';

describe('GradeReservasComponent', () => {
  let component: GradeReservasComponent;
  let fixture: ComponentFixture<GradeReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeReservasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
