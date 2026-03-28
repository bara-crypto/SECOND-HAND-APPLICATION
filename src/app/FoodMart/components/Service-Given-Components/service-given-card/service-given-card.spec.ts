import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceGivenCard } from './service-given-card';

describe('ServiceGivenCard', () => {
  let component: ServiceGivenCard;
  let fixture: ComponentFixture<ServiceGivenCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceGivenCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceGivenCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
