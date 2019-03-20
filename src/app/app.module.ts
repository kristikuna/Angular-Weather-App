import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WeatherContainer } from './weather/weather-container.component';
import { WeatherCardComponent } from './weather/weather-card.component';
import { WeatherDetailsComponent } from './weather/weather-details/weather-details.component';
import { CityService } from './weather/shared/city.service';
import { FahrenheitConverter } from './weather/shared/fahrenheitConverter.pipe';
import { CelsiusConverter } from './weather/shared/celsiusConverter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WeatherContainer,
    WeatherCardComponent,
    WeatherDetailsComponent,
    FahrenheitConverter,
    CelsiusConverter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
