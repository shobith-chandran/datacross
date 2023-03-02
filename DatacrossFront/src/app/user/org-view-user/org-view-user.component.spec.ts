import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgViewUserComponent } from './org-view-user.component';

describe('OrgViewUserComponent', () => {
  let component: OrgViewUserComponent;
  let fixture: ComponentFixture<OrgViewUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgViewUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgViewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
