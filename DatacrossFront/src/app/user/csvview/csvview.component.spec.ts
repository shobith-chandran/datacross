import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvviewComponent } from './csvview.component';

describe('CsvviewComponent', () => {
  let component: CsvviewComponent;
  let fixture: ComponentFixture<CsvviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsvviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsvviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
