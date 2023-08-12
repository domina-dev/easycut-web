import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibicaoServicosComponent } from './exibicao-servicos.component';

describe('ExibicaoServicosComponent', () => {
    let component: ExibicaoServicosComponent;
    let fixture: ComponentFixture<ExibicaoServicosComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ExibicaoServicosComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ExibicaoServicosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
