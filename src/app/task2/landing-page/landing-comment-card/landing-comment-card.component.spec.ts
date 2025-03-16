import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingCommentCardComponent } from './landing-comment-card.component';

describe('LandingCommentCardComponent', () => {
  let component: LandingCommentCardComponent;
  let fixture: ComponentFixture<LandingCommentCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingCommentCardComponent]
    });
    fixture = TestBed.createComponent(LandingCommentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
