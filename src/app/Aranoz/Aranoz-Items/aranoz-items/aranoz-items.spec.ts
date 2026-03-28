import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AranozItems } from './aranoz-items';

describe('AranozItems', () => {
  let component: AranozItems;
  let fixture: ComponentFixture<AranozItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AranozItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AranozItems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
