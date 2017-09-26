import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-compressor-view',
  templateUrl: './compressor-view.component.html',
  styleUrls: ['./compressor-view.component.scss']
})
export class CompressorViewComponent implements OnInit {

  public compressorForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createCompressorForm();
  }

  createCompressorForm() {
    this.compressorForm = this.formBuilder.group({
      threshold: -24,
      knee: 30,
      ratio: 12,
      attack: .003,
      release: .25
    });
  }

  updateCompressorView() {
  }

}
