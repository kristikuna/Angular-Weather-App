import { Component, OnInit } from '@angular/core';
import { CityService } from './shared/city.service';

@Component({
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.css']
})
export class WeatherComponent implements OnInit {
  cities: any[]
  constructor(private cityService: CityService) {
    this.cities = this.cityService.getCities()
  }

  ngOnInit() {
  }

}
