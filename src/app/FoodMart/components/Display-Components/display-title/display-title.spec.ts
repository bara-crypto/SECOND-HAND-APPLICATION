import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTitle } from './display-title';

describe('DisplayTitle', () => {
  let component: DisplayTitle;
  let fixture: ComponentFixture<DisplayTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayTitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayTitle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
