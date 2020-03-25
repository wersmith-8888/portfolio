import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPersonaDevelopmentComponent } from './user-persona-development.component';

describe('UserPersonaDevelopmentComponent', () => {
  let component: UserPersonaDevelopmentComponent;
  let fixture: ComponentFixture<UserPersonaDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPersonaDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPersonaDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
