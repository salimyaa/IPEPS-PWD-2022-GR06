import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetHomePageComponent } from './timesheet-home-page.component';

describe('TimesheetHomePageComponent', () => {
  let component: TimesheetHomePageComponent;
  let fixture: ComponentFixture<TimesheetHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimesheetHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
