import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWheelersComponent } from './two-wheelers.component';

describe('TwoWheelersComponent', () => {
  let component: TwoWheelersComponent;
  let fixture: ComponentFixture<TwoWheelersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWheelersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWheelersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
