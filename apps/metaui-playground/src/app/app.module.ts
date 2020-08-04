import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@mp/material';
import { StarWarsModule } from '@mp/star-wars';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    StarWarsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
