import { Component, Input } from '@angular/core';

// tslint:disable-next-line: whitespace
@Component({
  selector: 'tv-weather-card-add',
  templateUrl: './weather-card-add.component.html',
  styleUrls: ['./weather-card-add.component.css']
})

export class WeatherCardAddComponent {
  @Input() data: any
}
