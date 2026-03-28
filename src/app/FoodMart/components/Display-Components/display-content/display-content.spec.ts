import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayContent } from './display-content';

describe('DisplayContent', () => {
  let component: DisplayContent;
  let fixture: ComponentFixture<DisplayContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
