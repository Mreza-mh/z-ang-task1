import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQCardComponent } from './faq-card.component';

describe('FAQCardComponent', () => {
  let component: FAQCardComponent;
  let fixture: ComponentFixture<FAQCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FAQCardComponent]
    });
    fixture = TestBed.createComponent(FAQCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
