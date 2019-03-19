import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.css']
})
export class WeatherComponent implements OnInit {
  data1 = {
    id: 1,
    cityName: "Detroit",
    state: "Michigan",
    stateAB: "MI",
    weatherIcon: "placeholder for icon",
    currentWeather: "weather",
    summary: "summary for city"
  }
  data2 = {
    id: 2,
    cityName: "New York City",
    state: "New York",
    stateAB: "NY",
    weatherIcon: "placeholder for icon",
    currentWeather: "weather",
    summary: "summary for city"
  }
  data3 = {
    id: 3,
    cityName: "Chicago",
    state: "Illinois",
    stateAB: "IL",
    weatherIcon: "placeholder for icon",
    currentWeather: "weather",
    summary: "summary for city"
  }
  data4 = {
    id: 4,
    cityName: "San Francisco",
    state: "California",
    stateAB: "CA",
    weatherIcon: "placeholder for icon",
    currentWeather: "weather",
    summary: "summary for city"
  }
  data5 = {
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
