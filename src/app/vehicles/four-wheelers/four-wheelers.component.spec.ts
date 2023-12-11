import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourWheelersComponent } from './four-wheelers.component';

describe('FourWheelersComponent', () => {
  let component: FourWheelersComponent;
  let fixture: ComponentFixture<FourWheelersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourWheelersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourWheelersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
