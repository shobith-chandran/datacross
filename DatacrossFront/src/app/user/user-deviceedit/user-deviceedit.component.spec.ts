import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeviceeditComponent } from './user-deviceedit.component';

describe('UserDeviceeditComponent', () => {
  let component: UserDeviceeditComponent;
  let fixture: ComponentFixture<UserDeviceeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDeviceeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDeviceeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
