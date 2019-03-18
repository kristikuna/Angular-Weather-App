import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherThumbnailComponent } from './weather/weather-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WeatherComponent,
    WeatherThumbnailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
