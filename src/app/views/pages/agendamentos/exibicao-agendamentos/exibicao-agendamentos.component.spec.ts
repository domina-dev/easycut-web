import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibicaoAgendamentosComponent } from './exibicao-agendamentos.component';

describe('ExibicaoAgendamentosComponent', () => {
    let component: ExibicaoAgendamentosComponent;
    let fixture: ComponentFixture<ExibicaoAgendamentosComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ExibicaoAgendamentosComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ExibicaoAgendamentosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
