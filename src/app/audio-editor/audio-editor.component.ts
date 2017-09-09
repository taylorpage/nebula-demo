import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import presets from './audio-presets';

@Component({
  selector: 'app-audio-editor',
  templateUrl: './audio-editor.component.html',
  styleUrls: ['./audio-editor.component.scss']
})
export class AudioEditorComponent implements OnInit {

  public audioForm: FormGroup;
  private presets = presets;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createAudioForm();
  }

  createAudioForm(preset?: object) {
    this.audioForm = this.formBuilder.group({
      rangeOne: 0,
      rangeTwo: 0,
      rangeThree: 0,

      // EQ
      eqOne: 0,
      eqTwo: 0,
      eqThree: 0,
      eqFour: 0,
      eqFive: 0,
      eqSix: 0,

      // Pre set
      preset: ''
    });
  }

  setPresetAudioForm(presetForm: any, genre: string) {
    presetForm.preset = genre;
    this.audioForm = this.formBuilder.group(presetForm);
  }

  setPreset() {
    const genre = this.audioForm.get('preset').value;
    const preset = this.presets[genre];

    this.setPresetAudioForm(preset, genre);
  }
}
