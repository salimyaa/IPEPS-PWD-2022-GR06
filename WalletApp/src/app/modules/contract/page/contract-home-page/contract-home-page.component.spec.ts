import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractHomePageComponent } from './contract-home-page.component';

describe('ContractHomePageComponent', () => {
  let component: ContractHomePageComponent;
  let fixture: ComponentFixture<ContractHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
