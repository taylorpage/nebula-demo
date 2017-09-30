import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';

import { genreEqs } from '../shared/audio-presets';

@Component({
  selector: 'app-eq-view',
  templateUrl: './eq-view.component.html',
  styleUrls: ['./eq-view.component.scss']
})
export class EqViewComponent implements OnInit {

  public eqForm: FormGroup;

  public eq32 = 0;
  public eq125 = 0;
  public eq500 = 0;
  public eq1000 = 0;
  public eq4000 = 0;
  public eq16000 = 0;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createEqForm();
  }

  createEqForm() {
    this.eqForm = this.formBuilder.group({
      // EQ
      eq32: this.eq32,
      eq125: this.eq125,
      eq500: this.eq500,
      eq1000: this.eq1000,
      eq4000: this.eq4000,
      eq16000: this.eq16000,
    });
  }

  setGenreEqDefaults(genre: string) {
    const settings = genreEqs[genre];

    this.eq32 = settings[0];
    this.eq125 = settings[1];
    this.eq500 = settings[2];
    this.eq1000 = settings[3];
    this.eq4000 = settings[4];
    this.eq16000 = settings[5];

    // Reset form with new defaults
    this.createEqForm();
  }

}
