import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailContractPageComponent } from './detail-contract-page.component';

describe('DetailContractPageComponent', () => {
  let component: DetailContractPageComponent;
  let fixture: ComponentFixture<DetailContractPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailContractPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailContractPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
