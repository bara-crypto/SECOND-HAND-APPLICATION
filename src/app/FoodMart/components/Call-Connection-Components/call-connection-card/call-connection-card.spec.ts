import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallConnectionCard } from './call-connection-card';

describe('CallConnectionCard', () => {
  let component: CallConnectionCard;
  let fixture: ComponentFixture<CallConnectionCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallConnectionCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallConnectionCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
