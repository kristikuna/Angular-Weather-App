import { Component } from '@angular/core';
import { CityService } from '../shared/city.service'
import { ActivatedRoute } from '@angular/router'
@Component({
  templateUrl: './weather-details.component.html'
  
})

export class WeatherDetailsComponent {
  city: any
  constructor(private cityService:CityService, private route:ActivatedRoute) {


  }
  ngOnInit() {
    this.city = this.cityService.getCity(this.route.snapshot.params['id'])
  }
}
