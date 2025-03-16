import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecourseCardComponent } from './precourse-card.component';

describe('PrecourseCardComponent', () => {
  let component: PrecourseCardComponent;
  let fixture: ComponentFixture<PrecourseCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrecourseCardComponent]
    });
    fixture = TestBed.createComponent(PrecourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
