import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyHomePageComponent } from './company-home-page.component';

describe('CompanyHomePageComponent', () => {
  let component: CompanyHomePageComponent;
  let fixture: ComponentFixture<CompanyHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
