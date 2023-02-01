import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTimesheetPageComponent } from './create-timesheet-page.component';

describe('CreateTimesheetPageComponent', () => {
  let component: CreateTimesheetPageComponent;
  let fixture: ComponentFixture<CreateTimesheetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTimesheetPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTimesheetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
