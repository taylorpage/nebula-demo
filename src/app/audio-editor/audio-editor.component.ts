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
  private reverb: ConvolverNode;
  private reverbGain: GainNode;
  private dryReverbGain: GainNode;

  private eq32: BiquadFilterNode;
  private eq125: BiquadFilterNode;
  private eq500: BiquadFilterNode;
  private eq1000: BiquadFilterNode;
  private eq4000: BiquadFilterNode;
  private eq16000: BiquadFilterNode;

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
      eq32: 0,
      eq125: 0,
      eq500: 0,
      eq1000: 0,
      eq4000: 0,
      eq16000: 0,

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

    this.reverb = this.audioContext.createConvolver();
    this.reverbGain = this.audioContext.createGain();
    this.dryReverbGain = this.audioContext.createGain();

    this.createEQ();
    this.createReverb();
  }

  createEQ() {
    ['eq32', 'eq125', 'eq500', 'eq1000', 'eq4000', 'eq16000']
      .forEach(level => {
        this[level] = this.audioContext.createBiquadFilter();
        this[level].q = 1.3;

        if (level === 'eq32') {
          this[level].type = 'lowshelf';
        } else if (level === 'eq16000') {
          this[level].type = 'highshelf';
        } else {
          this[level].type = 'peaking';
        }
      });

    this.eq32.frequency.value = 32;
    this.eq125.frequency.value = 125;
    this.eq500.frequency.value = 500;
    this.eq1000.frequency.value = 1000;
    this.eq4000.frequency.value = 4000;
    this.eq16000.frequency.value = 16000;
  }

  createReverb() {
    const request = new XMLHttpRequest();
    request.open('GET', '../../assets/audio/bright_reverb.mp3', true);
    request.responseType = 'arraybuffer';

    request.onload = () => {
      this.audioContext.decodeAudioData(request.response, (buffer) => {
        this.reverb.buffer = buffer;
        this.reverb.normalize = true;
        this.reverbGain.gain.value = 0;
        this.reverbGain.connect(this.reverb);
        this.reverb.connect(this.dryReverbGain);
      });
    };
    request.send();
  }

  connectAudio() {
    this.source.connect(this.reverbGain);
    this.source.connect(this.dryReverbGain);
    // this.reverb.connect(this.dryReverbGain);
    this.dryReverbGain.connect(this.eq32);

    this.eq32.connect(this.eq125);
    this.eq125.connect(this.eq500);
    this.eq500.connect(this.eq1000);
    this.eq1000.connect(this.eq4000);
    this.eq4000.connect(this.eq16000);
    this.eq16000.connect(this.compressor);

    this.compressor.connect(this.gain);
    this.gain.connect(this.audioContext.destination);
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
      this.connectAudio();
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
    this.gain.gain.value = this.audioForm.get('rangeThree').value;
  }

  updateReverb() {
    this.reverbGain.gain.value = this.audioForm.get('rangeTwo').value;
  }

  updateEq(freq: string) {
    this[freq].gain.value = this.audioForm.get(freq).value / 5;
  }




}
