import { Component } from '@angular/core';
import { CityService } from '../shared/city.service'

@Component({
  templateUrl: './weather-details.component.html'
  
})

export class WeatherDetailsComponent {
  city: any
  constructor(private cityService:CityService){


  }
  ngOnInit() {
    this.city = this.cityService.getCity(1)
  }
}
