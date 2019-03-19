import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WeatherComponent } from './weather/weather-container.component';
import { WeatherThumbnailComponent } from './weather/weather-thumbnail.component';
import { WeatherDetailsComponent } from './weather/weather-details/weather-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WeatherComponent,
    WeatherThumbnailComponent,
    WeatherDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
