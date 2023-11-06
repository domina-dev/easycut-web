import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAgendamentosComponent } from './lista-agendamentos.component';

describe('ListaAgendamentosComponent', () => {
  let component: ListaAgendamentosComponent;
  let fixture: ComponentFixture<ListaAgendamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAgendamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAgendamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
