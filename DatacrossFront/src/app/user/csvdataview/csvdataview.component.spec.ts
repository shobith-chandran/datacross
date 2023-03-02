import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvdataviewComponent } from './csvdataview.component';

describe('CsvdataviewComponent', () => {
  let component: CsvdataviewComponent;
  let fixture: ComponentFixture<CsvdataviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsvdataviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsvdataviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
