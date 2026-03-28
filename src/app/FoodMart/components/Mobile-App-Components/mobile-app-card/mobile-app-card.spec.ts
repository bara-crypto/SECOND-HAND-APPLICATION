import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppCard } from './mobile-app-card';

describe('MobileAppCard', () => {
  let component: MobileAppCard;
  let fixture: ComponentFixture<MobileAppCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileAppCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileAppCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
