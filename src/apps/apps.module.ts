import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppsComponent } from './apps.component';

@NgModule({
  declarations: [
    AppsComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppsComponent]
})
export class AppsModule { }
