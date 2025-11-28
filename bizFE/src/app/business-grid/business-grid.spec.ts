import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessGrid } from './business-grid';

describe('BusinessGrid', () => {
  let component: BusinessGrid;
  let fixture: ComponentFixture<BusinessGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
