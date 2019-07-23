import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectBuyComponent } from './direct-buy.component';

describe('DirectBuyComponent', () => {
  let component: DirectBuyComponent;
  let fixture: ComponentFixture<DirectBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
