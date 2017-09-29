import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompressorViewComponent } from './compressor-view.component';

describe('CompressorViewComponent', () => {
  let component: CompressorViewComponent;
  let fixture: ComponentFixture<CompressorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompressorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompressorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
