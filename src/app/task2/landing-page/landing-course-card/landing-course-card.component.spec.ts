import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingCourseCardComponent } from './landing-course-card.component';

describe('LandingCourseCardComponent', () => {
  let component: LandingCourseCardComponent;
  let fixture: ComponentFixture<LandingCourseCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingCourseCardComponent]
    });
    fixture = TestBed.createComponent(LandingCourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
