import { Component } from '@angular/core';
import { CityService } from '../shared/city.service';
import { ActivatedRoute, Params } from '@angular/router';
import { City } from '../shared/city';
@Component({
  selector: 'tv-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})

export class WeatherDetailsComponent {
  city: City;

  constructor(private cityService: CityService, private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.cityService.getCity(+params['id']).subscribe((city: City) => {
        this.city = city;
      });
    });
  }
}
