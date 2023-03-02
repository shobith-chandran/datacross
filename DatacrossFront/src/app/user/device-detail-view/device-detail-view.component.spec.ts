import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceDetailViewComponent } from './device-detail-view.component';

describe('DeviceDetailViewComponent', () => {
  let component: DeviceDetailViewComponent;
  let fixture: ComponentFixture<DeviceDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceDetailViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
