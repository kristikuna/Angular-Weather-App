import { Component, OnInit } from '@angular/core';
import { CityService } from './shared/city.service';
import { City } from './shared/city';

// import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'tv-weather-container',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.css']
})
export class WeatherContainer implements OnInit {
  cities: City[]
  constructor(private cityService: CityService) {
  }

  ngOnInit() {
    //pass array of city codes
    this.getCities();
  }

  getCities(): void {
    this.cityService.getCities().subscribe(cities => this.cities = cities);
  }
}

