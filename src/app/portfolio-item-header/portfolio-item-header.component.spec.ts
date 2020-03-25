import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioItemHeaderComponent } from './portfolio-item-header.component';

describe('PortfolioItemHeaderComponent', () => {
  let component: PortfolioItemHeaderComponent;
  let fixture: ComponentFixture<PortfolioItemHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioItemHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioItemHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
