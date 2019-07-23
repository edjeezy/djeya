import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerLoginPage } from './seller-login.page';

describe('SellerLoginPage', () => {
  let component: SellerLoginPage;
  let fixture: ComponentFixture<SellerLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
