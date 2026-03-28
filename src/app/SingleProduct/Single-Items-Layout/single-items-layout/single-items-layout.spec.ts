import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleItemsLayout } from './single-items-layout';

describe('SingleItemsLayout', () => {
  let component: SingleItemsLayout;
  let fixture: ComponentFixture<SingleItemsLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleItemsLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleItemsLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
