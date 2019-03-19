import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  template: `
  <div class="container">
    <div class="row">
      <weather-thumbnail [event]="event1" class="col-lg-3 col-md-4 col-sm-12"></weather-thumbnail>
      <weather-thumbnail [event]="event2" class="col-lg-3 col-md-4 col-sm-12"></weather-thumbnail>
      <weather-thumbnail [event]="event3" class="col-lg-3 col-md-4 col-sm-12"></weather-thumbnail>
      <weather-thumbnail [event]="event4" class="col-lg-3 col-md-4 col-sm-12"></weather-thumbnail>
      <weather-thumbnail [event]="event5" class="col-lg-3 col-md-4 col-sm-12"></weather-thumbnail>

    </div>
  </div>
  `,
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  event1 = {
    id: 1,
    cityName: "Detroit",
    state: "Michigan",
    stateAB: "MI",
    weatherIcon: "placeholder for icon",
    currentWeather: "weather",
    summary: "summary for city"
  }
  event2 = {
    id: 2,
    cityName: "New York City",
    state: "New York",
    stateAB: "NY",
    weatherIcon: "placeholder for icon",
    currentWeather: "weather",
    summary: "summary for city"
  }
  event3 = {
    id: 3,
    cityName: "Chicago",
    state: "Illinois",
    stateAB: "IL",
    weatherIcon: "placeholder for icon",
    currentWeather: "weather",
    summary: "summary for city"
  }
  event4 = {
    id: 4,
    cityName: "San Francisco",
    state: "California",
    stateAB: "CA",
    weatherIcon: "placeholder for icon",
    currentWeather: "weather",
    summary: "summary for city"
  }
  event5 = {
    id: 5,
    cityName: "Austin",
    state: "Texas",
    stateAB: "TX",
    weatherIcon: "placeholder for icon",
    currentWeather: "weather",
    summary: "summary for city"
  }
  constructor() { }

  ngOnInit() {
  }

}
