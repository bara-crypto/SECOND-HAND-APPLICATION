import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertWashingMachineDetails } from './insert-washing-machine-details';

describe('InsertWashingMachineDetails', () => {
  let component: InsertWashingMachineDetails;
  let fixture: ComponentFixture<InsertWashingMachineDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertWashingMachineDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertWashingMachineDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
