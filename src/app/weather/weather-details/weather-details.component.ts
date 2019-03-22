import { Component } from '@angular/core';
import { CityService } from '../shared/city.service';
import { ActivatedRoute, Params } from '@angular/router';
import { City } from '../shared/city';
import { Forecast } from '../shared/forecast';
@Component({
  selector: 'tv-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})

export class WeatherDetailsComponent {
  city: City;
  forecast: Forecast;
  forecastId;

  constructor(private cityService: CityService, private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.cityService.getCity(+params['id']).subscribe((city: City) => {
        this.city = city;
        this.forecastId = city.id;
        console.log(this.forecastId);
      });
    });
  }
  getForecast(): void {
    this.cityService.getForecast(this.forecastId).subscribe(forecast => {
      this.forecast = forecast;
      console.log(forecast);
    });
  }
}
