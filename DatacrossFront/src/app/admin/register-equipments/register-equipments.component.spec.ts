import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEquipmentsComponent } from './register-equipments.component';

describe('RegisterEquipmentsComponent', () => {
  let component: RegisterEquipmentsComponent;
  let fixture: ComponentFixture<RegisterEquipmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterEquipmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterEquipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
