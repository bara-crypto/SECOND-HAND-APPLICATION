import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryItems } from './category-items';

describe('CategoryItems', () => {
  let component: CategoryItems;
  let fixture: ComponentFixture<CategoryItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryItems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
