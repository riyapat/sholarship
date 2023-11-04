import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ApsComponent } from './aps.component';

@NgModule({
  declarations: [
    ApsComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [ApsComponent]
})
export class ApsModule { }
