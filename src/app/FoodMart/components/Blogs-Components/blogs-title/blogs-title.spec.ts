import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsTitle } from './blogs-title';

describe('BlogsTitle', () => {
  let component: BlogsTitle;
  let fixture: ComponentFixture<BlogsTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogsTitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogsTitle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
