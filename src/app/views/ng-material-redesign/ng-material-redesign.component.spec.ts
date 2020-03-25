import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMaterialRedesignComponent } from './ng-material-redesign.component';

describe('NgMaterialRedesignComponent', () => {
  let component: NgMaterialRedesignComponent;
  let fixture: ComponentFixture<NgMaterialRedesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMaterialRedesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMaterialRedesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
