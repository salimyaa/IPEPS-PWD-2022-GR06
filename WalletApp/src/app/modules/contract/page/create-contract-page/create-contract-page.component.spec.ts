import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContractPageComponent } from './create-contract-page.component';

describe('CreateContractPageComponent', () => {
  let component: CreateContractPageComponent;
  let fixture: ComponentFixture<CreateContractPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateContractPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateContractPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
