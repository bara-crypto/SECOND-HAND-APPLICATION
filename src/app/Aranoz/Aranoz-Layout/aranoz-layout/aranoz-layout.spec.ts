import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AranozLayout } from './aranoz-layout';

describe('AranozLayout', () => {
  let component: AranozLayout;
  let fixture: ComponentFixture<AranozLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AranozLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AranozLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
