import { Injectable } from '@angular/core'

@Injectable()
export class CityService {
  getCities() {
    return CITIES
  }
}

const CITIES = [
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
