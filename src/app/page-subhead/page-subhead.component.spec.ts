import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSubheadComponent } from './page-subhead.component';

describe('PageSubheadComponent', () => {
  let component: PageSubheadComponent;
  let fixture: ComponentFixture<PageSubheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSubheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSubheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
