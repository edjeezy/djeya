import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPageAcceuilComponent } from './gestion-page-acceuil.component';

describe('GestionPageAcceuilComponent', () => {
  let component: GestionPageAcceuilComponent;
  let fixture: ComponentFixture<GestionPageAcceuilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionPageAcceuilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionPageAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
