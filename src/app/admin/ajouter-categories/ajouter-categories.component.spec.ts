import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCategoriesComponent } from './ajouter-categories.component';

describe('AjouterCategoriesComponent', () => {
  let component: AjouterCategoriesComponent;
  let fixture: ComponentFixture<AjouterCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
