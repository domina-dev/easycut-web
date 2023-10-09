import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibicaoPromocoesComponent } from './exibicao-promocoes.component';

describe('ExibicaoPromocoesComponent', () => {
    let component: ExibicaoPromocoesComponent;
    let fixture: ComponentFixture<ExibicaoPromocoesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ExibicaoPromocoesComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ExibicaoPromocoesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
