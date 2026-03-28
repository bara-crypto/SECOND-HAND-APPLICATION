import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillBoard } from './bill-board';

describe('BillBoard', () => {
  let component: BillBoard;
  let fixture: ComponentFixture<BillBoard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillBoard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillBoard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
