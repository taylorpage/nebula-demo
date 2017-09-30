import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { genreCompressors } from '../shared/audio-presets';
@Component({
  selector: 'app-compressor-view',
  templateUrl: './compressor-view.component.html',
  styleUrls: ['./compressor-view.component.scss']
})
export class CompressorViewComponent implements OnInit {

  public compressorForm: FormGroup;

  // Compressor defaults
  public threshold = -24;
  public knee = 30;
  public ratio = 12;
  public attack = .4; // web audio api default: .003
  public release = .25;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createCompressorForm();
  }

  createCompressorForm() {
    this.compressorForm = this.formBuilder.group({
      threshold: this.threshold,
      knee: this.knee,
      ratio: this.ratio,
      attack: this.attack,
      release: this.release,
      compressor: 0,
    });
  }

  // Updates value for each knob
  updateCompressorView() {
    const percentage = this.compressorForm.get('compressor').value;
    this.compressorForm.controls['threshold'].setValue(this.threshold - (percentage * 60));
    this.compressorForm.controls['knee'].setValue(this.knee - (percentage * 10));
    this.compressorForm.controls['ratio'].setValue(this.ratio + (percentage * 10));
    this.compressorForm.controls['attack'].setValue(this.attack - (percentage * .300));
    this.compressorForm.controls['release'].setValue(this.release + (percentage * .25));
  }

  // Sets compressor defaults based on genre selected
  setGenreCompressorDefaults(genre: string) {
    const settings = genreCompressors[genre];

    this.threshold = settings[0];
    this.knee = settings[1];
    this.ratio = settings[2];
    this.attack = settings[3];
    this.release = settings[4];

    // Reset form with new defaults and adjustment ratios
    this.createCompressorForm();
  }


}
