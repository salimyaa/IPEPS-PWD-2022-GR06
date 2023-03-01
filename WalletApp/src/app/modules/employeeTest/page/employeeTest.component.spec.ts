import { ComponentFixture, TestBed } from '@angular/core/testing';

import { employeeTestComponent } from './employeeTest.component';

describe('PageComponent', () => {
  let component: employeeTestComponent;
  let fixture: ComponentFixture<employeeTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ employeeTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(employeeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
