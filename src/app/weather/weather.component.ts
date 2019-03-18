import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  template: `
  <div>
    <weather-thumbnail [event]="event1"></weather-thumbnail>
    <weather-thumbnail [event]="event2"></weather-thumbnail>
    <weather-thumbnail [event]="event3"></weather-thumbnail>
    <weather-thumbnail [event]="event4"></weather-thumbnail>
    <weather-thumbnail [event]="event5"></weather-thumbnail>
  </div>
  `,
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  event1 = {
    id: 1,
    cityName: "Detroit",
    state: "Michigan"
  }
  event2 = {
    id: 2,
    cityName: "New York City",
    state: "New York"
  }
  event3 = {
    id: 3,
    cityName: "Chicago",
    state: "Illinois"
  }
  event4 = {
    id: 4,
    cityName: "San Francisco",
    state: "California"
  }
  event5 = {
    id: 5,
    cityName: "Austin",
    state: "Texas"
  }
  constructor() { }

  ngOnInit() {
  }

}
