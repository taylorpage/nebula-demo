import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import presets from './audio-presets';

@Component({
  selector: 'app-audio-editor',
  templateUrl: './audio-editor.component.html',
  styleUrls: ['./audio-editor.component.scss']
})
export class AudioEditorComponent implements OnInit {


  private audioContext = new AudioContext();
  private source: MediaElementAudioSourceNode;
  public playing = false;

  // Effects
  private compressor: DynamicsCompressorNode;
  private gain: GainNode;

  public audioForm: FormGroup;
  private presets = presets;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createAudioForm();
    this.setEffects();
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

  setEffects() {
    this.compressor = this.audioContext.createDynamicsCompressor();
    this.gain = this.audioContext.createGain();
  }


  toggleAudio() {
    if (this.source) {
      this.source.disconnect();
    }

    if (!this.playing) {
      const audio = new Audio();
      audio.src = '../../assets/audio/nebula_demo_loop.mp3';
      audio.autoplay = true;
      audio.loop = true;

      this.source = this.audioContext.createMediaElementSource(audio);

      this.setEffects();

      this.source.connect(this.compressor);
      this.compressor.connect(this.gain);
      this.gain.connect(this.audioContext.destination);
    }

    this.playing = !this.playing;
  }

  updateCompressor() {
    const range = this.audioForm.get('rangeOne').value * .01;
    this.compressor.threshold.value = range * -100;
    this.compressor.knee.value = range * 40;
    this.compressor.ratio.value = (range * 19) + 1;
    this.compressor.attack.value = 1 - range;
    this.compressor.release.value = range;
  }

  updateGain() {
    const gain = this.audioForm.get('rangeThree').value;
    this.gain.gain.value = gain;
  }




}
