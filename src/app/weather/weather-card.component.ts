import { Component, Input } from '@angular/core';

@Component({
  selector: 'tv-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-container.component.css']
})
export class WeatherCardComponent {
  @Input() data: any
}
