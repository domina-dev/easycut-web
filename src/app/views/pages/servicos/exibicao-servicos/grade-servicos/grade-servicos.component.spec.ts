import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeServicosComponent } from './grade-servicos.component';

describe('GradeServicosComponent', () => {
  let component: GradeServicosComponent;
  let fixture: ComponentFixture<GradeServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeServicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
