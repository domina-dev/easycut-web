import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaVendaComponent } from './nova-venda.component';

describe('NovaVendaComponent', () => {
  let component: NovaVendaComponent;
  let fixture: ComponentFixture<NovaVendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaVendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
