import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBillBoard } from './main-bill-board';

describe('MainBillBoard', () => {
  let component: MainBillBoard;
  let fixture: ComponentFixture<MainBillBoard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainBillBoard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainBillBoard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
