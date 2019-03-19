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
    coord: { "lon": 1, "lat": 35 },
    name: "Shuzenji",
    weather: {
      description: "overcast clouds",
      icon: "placeholder for icon"
    },
    main: {
      temp: 285.514,
      humidity: 100
    }
  },
  {
    id: 2,
    coord: { "lon": 2, "lat": 35 },
    name: "Chicago",
    weather: {
      description: "sunny",
      icon: "placeholder for icon"
    },
    main: {
      temp: 285.514,
      humidity: 100
    }
  },
  {
    id: 3,
    coord: { "lon": 3, "lat": 35 },
    name: "Detroit",
    weather: {
      description: "snow",
      icon: "placeholder for icon"
    },
    main: {
      temp: 285.514,
      humidity: 100
    }
  },
  {
    id: 4,
    coord: { "lon": 4, "lat": 35 },
    name: "Miami",
    weather: {
      description: "rainy",
      icon: "placeholder for icon"
    },
    main: {
      temp: 285.514,
      humidity: 100
    }
  },
  {
    id: 5,
    coord: { "lon": 5, "lat": 35 },
    name: "San Franciso",
    weather: {
      description: "partly cloudy",
      icon: "placeholder for icon"
    },
    main: {
      temp: 285.514,
      humidity: 100
    }
  }
]
