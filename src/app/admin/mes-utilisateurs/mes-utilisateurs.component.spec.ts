import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesUtilisateursComponent } from './mes-utilisateurs.component';

describe('MesUtilisateursComponent', () => {
  let component: MesUtilisateursComponent;
  let fixture: ComponentFixture<MesUtilisateursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesUtilisateursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesUtilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
