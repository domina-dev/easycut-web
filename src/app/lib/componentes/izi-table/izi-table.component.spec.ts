/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IziTableComponent } from './izi-table.component';

describe('IziTableComponent', () => {
  let component: IziTableComponent;
  let fixture: ComponentFixture<IziTableComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ IziTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IziTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
