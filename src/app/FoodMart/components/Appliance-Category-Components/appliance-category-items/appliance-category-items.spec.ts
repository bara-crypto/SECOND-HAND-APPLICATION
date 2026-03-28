import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplianceCategoryItems } from './appliance-category-items';

describe('ApplianceCategoryItems', () => {
  let component: ApplianceCategoryItems;
  let fixture: ComponentFixture<ApplianceCategoryItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplianceCategoryItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplianceCategoryItems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
