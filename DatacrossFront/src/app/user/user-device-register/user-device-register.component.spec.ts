import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeviceRegisterComponent } from './user-device-register.component';

describe('UserDeviceRegisterComponent', () => {
  let component: UserDeviceRegisterComponent;
  let fixture: ComponentFixture<UserDeviceRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDeviceRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDeviceRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
