import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleDescribeComponent } from './title-describe.component';

describe('TitleDescribeComponent', () => {
  let component: TitleDescribeComponent;
  let fixture: ComponentFixture<TitleDescribeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleDescribeComponent]
    });
    fixture = TestBed.createComponent(TitleDescribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
