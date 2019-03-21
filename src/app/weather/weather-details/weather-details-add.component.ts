import { Component } from '@angular/core';
import { CityService } from '../shared/city.service';
import { ActivatedRoute } from '@angular/router';
@cdomponent({
  selector: 'tv-weather-details',
  templateUrl: './weather-details-add.component.html',
  styleUrls: ['./weather-details-add.component.css']
})

export class WeatherDetailsAddComponent {
  city: any
  constructor(private cityService: CityService, private route: ActivatedRoute) {


  }
  ngOnInit() {
    this.city = this.cityService.getCity(+this.route.snapshot.params['id'])
  }
}
