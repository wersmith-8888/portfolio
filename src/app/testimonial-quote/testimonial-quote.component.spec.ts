import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialQuoteComponent } from './testimonial-quote.component';

describe('TestimonialQuoteComponent', () => {
  let component: TestimonialQuoteComponent;
  let fixture: ComponentFixture<TestimonialQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
