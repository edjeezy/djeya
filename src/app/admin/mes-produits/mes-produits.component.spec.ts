import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesProduitsComponent } from './mes-produits.component';

describe('MesProduitsComponent', () => {
  let component: MesProduitsComponent;
  let fixture: ComponentFixture<MesProduitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesProduitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
