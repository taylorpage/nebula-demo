import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EqViewComponent } from './eq-view.component';

describe('EqViewComponent', () => {
  let component: EqViewComponent;
  let fixture: ComponentFixture<EqViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EqViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EqViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
