import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibicaoReservasComponent } from './exibicao-reservas.component';

describe('ExibicaoReservasComponent', () => {
    let component: ExibicaoReservasComponent;
    let fixture: ComponentFixture<ExibicaoReservasComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ExibicaoReservasComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ExibicaoReservasComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
