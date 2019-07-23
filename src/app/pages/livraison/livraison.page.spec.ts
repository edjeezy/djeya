import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivraisonPage } from './livraison.page';

describe('LivraisonPage', () => {
  let component: LivraisonPage;
  let fixture: ComponentFixture<LivraisonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivraisonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivraisonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
