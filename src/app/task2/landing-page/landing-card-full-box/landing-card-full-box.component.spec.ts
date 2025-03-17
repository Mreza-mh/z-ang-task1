import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingCardFullBoxComponent } from './landing-card-full-box.component';

describe('LandingCardFullBoxComponent', () => {
  let component: LandingCardFullBoxComponent;
  let fixture: ComponentFixture<LandingCardFullBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingCardFullBoxComponent]
    });
    fixture = TestBed.createComponent(LandingCardFullBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
