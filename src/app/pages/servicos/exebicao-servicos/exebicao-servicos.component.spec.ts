import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExebicaoServicosComponent } from './exebicao-servicos.component';

describe('ExebicaoServicosComponent', () => {
  let component: ExebicaoServicosComponent;
  let fixture: ComponentFixture<ExebicaoServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExebicaoServicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExebicaoServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
