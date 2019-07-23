import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutMainPageComponent } from './checkout-main-page.component';

describe('CheckoutMainPageComponent', () => {
  let component: CheckoutMainPageComponent;
  let fixture: ComponentFixture<CheckoutMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
