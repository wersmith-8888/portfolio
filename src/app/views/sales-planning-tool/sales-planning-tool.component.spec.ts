import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPlanningToolComponent } from './sales-planning-tool.component';

describe('SalesPlanningToolComponent', () => {
  let component: SalesPlanningToolComponent;
  let fixture: ComponentFixture<SalesPlanningToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesPlanningToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesPlanningToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
