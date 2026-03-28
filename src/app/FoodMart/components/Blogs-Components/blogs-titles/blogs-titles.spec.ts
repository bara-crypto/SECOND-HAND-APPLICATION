import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsTitles } from './blogs-titles';

describe('BlogsTitles', () => {
  let component: BlogsTitles;
  let fixture: ComponentFixture<BlogsTitles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogsTitles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogsTitles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
