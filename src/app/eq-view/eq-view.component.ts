import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-eq-view',
  templateUrl: './eq-view.component.html',
  styleUrls: ['./eq-view.component.scss']
})
export class EqViewComponent implements OnInit {

  public eqForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createEqForm();
  }

  createEqForm() {
    this.eqForm = this.formBuilder.group({
      // EQ
      eq32: 0,
      eq125: 0,
      eq500: 0,
      eq1000: 0,
      eq4000: 0,
      eq16000: 0,
    });
  }

}
