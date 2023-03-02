import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryUserRegisterComponent } from './enquiry-user-register.component';

describe('EnquiryUserRegisterComponent', () => {
  let component: EnquiryUserRegisterComponent;
  let fixture: ComponentFixture<EnquiryUserRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquiryUserRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnquiryUserRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
