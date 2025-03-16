import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSponserCardComponent } from './landing-sponser-card.component';

describe('LandingSponserCardComponent', () => {
  let component: LandingSponserCardComponent;
  let fixture: ComponentFixture<LandingSponserCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingSponserCardComponent]
    });
    fixture = TestBed.createComponent(LandingSponserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
