import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonComposantComponent } from './mon-composant/mon-composant.component';
import { HighlightDirective } from './highlight.directive';
import { DisplayGuestsDirective } from './display-guests.directive';
import { DisplayMoviesDirective } from './display-movies.directive';

@NgModule({
  declarations: [
    AppComponent,
    MonComposantComponent,
    HighlightDirective,
    DisplayGuestsDirective,
    DisplayMoviesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
