import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesDisplayComponent } from './categories-display.component';

describe('CategoriesDisplayComponent', () => {
  let component: CategoriesDisplayComponent;
  let fixture: ComponentFixture<CategoriesDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
