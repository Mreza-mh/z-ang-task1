import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingCardBoxComponent } from './landing-card-box.component';

describe('LandingCardBoxComponent', () => {
  let component: LandingCardBoxComponent;
  let fixture: ComponentFixture<LandingCardBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingCardBoxComponent]
    });
    fixture = TestBed.createComponent(LandingCardBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
