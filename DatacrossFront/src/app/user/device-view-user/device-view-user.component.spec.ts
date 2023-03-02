import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceViewUserComponent } from './device-view-user.component';

describe('DeviceViewUserComponent', () => {
  let component: DeviceViewUserComponent;
  let fixture: ComponentFixture<DeviceViewUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceViewUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceViewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
