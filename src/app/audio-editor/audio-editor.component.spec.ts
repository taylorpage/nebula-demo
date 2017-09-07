import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioEditorComponent } from './audio-editor.component';

describe('AudioEditorComponent', () => {
  let component: AudioEditorComponent;
  let fixture: ComponentFixture<AudioEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
