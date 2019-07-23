import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagCategoryComponent } from './tag-category.component';

describe('TagCategoryComponent', () => {
  let component: TagCategoryComponent;
  let fixture: ComponentFixture<TagCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
