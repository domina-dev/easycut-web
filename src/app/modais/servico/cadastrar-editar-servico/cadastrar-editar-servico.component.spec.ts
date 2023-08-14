import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEditarServicoComponent } from './cadastrar-editar-servico.component';

describe('CadastrarEditarServicoComponent', () => {
    let component: CadastrarEditarServicoComponent;
    let fixture: ComponentFixture<CadastrarEditarServicoComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CadastrarEditarServicoComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CadastrarEditarServicoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
