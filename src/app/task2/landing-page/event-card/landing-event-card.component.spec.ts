import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingEventCardComponent } from './landing-event-card.component';

describe('LandingEventCardComponent', () => {
  let component: LandingEventCardComponent;
  let fixture: ComponentFixture<LandingEventCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingEventCardComponent]
    });
    fixture = TestBed.createComponent(LandingEventCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
