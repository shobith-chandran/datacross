import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvgraphComponent } from './csvgraph.component';

describe('CsvgraphComponent', () => {
  let component: CsvgraphComponent;
  let fixture: ComponentFixture<CsvgraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsvgraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsvgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
