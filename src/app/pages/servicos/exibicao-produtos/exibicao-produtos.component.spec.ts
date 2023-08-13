import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibicaoProdutosComponent } from './exibicao-produtos.component';

describe('ExibicaoProdutosComponent', () => {
    let component: ExibicaoProdutosComponent;
    let fixture: ComponentFixture<ExibicaoProdutosComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ExibicaoProdutosComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ExibicaoProdutosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
