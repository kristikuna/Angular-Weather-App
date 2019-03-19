import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.css']
})
export class WeatherComponent implements OnInit {
  cities = [
    {
      id: 1,
      cityName: "Detroit",
      state: "Michigan",
      stateAB: "MI",
      weatherIcon: "placeholder for icon",
      currentWeather: "weather",
      summary: "summary for city"
    },
    {
      id: 2,
      cityName: "New York City",
      state: "New York",
      stateAB: "NY",
      weatherIcon: "placeholder for icon",
      currentWeather: "weather",
      summary: "summary for city"
    },
    {
      id: 3,
      cityName: "Chicago",
      state: "Illinois",
      stateAB: "IL",
      weatherIcon: "placeholder for icon",
      currentWeather: "weather",
      summary: "summary for city"
    },
    {
      id: 4,
      cityName: "San Francisco",
      state: "California",
      stateAB: "CA",
      weatherIcon: "placeholder for icon",
      currentWeather: "weather",
      summary: "summary for city"
    },
    {
      id: 5,
      cityName: "Austin",
      state: "Texas",
      stateAB: "TX",
      weatherIcon: "placeholder for icon",
      currentWeather: "weather",
      summary: "summary for city"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
