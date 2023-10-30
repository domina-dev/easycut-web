import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeProdutosComponent } from './grade-produtos.component';

describe('GradeProdutosComponent', () => {
  let component: GradeProdutosComponent;
  let fixture: ComponentFixture<GradeProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
