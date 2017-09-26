import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { AudioEditorComponent } from './audio-editor/audio-editor.component';
import { AudioRecorderComponent } from './audio-recorder/audio-recorder.component';
import { NavComponent } from './core/nav/nav.component';
import { HeaderComponent } from './core/header/header.component';
import { CompressorViewComponent } from './compressor-view/compressor-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AudioEditorComponent,
    AudioRecorderComponent,
    NavComponent,
    HeaderComponent,
    CompressorViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
