import { Component, Input } from '@angular/core'

@Component({
  selector: 'weather-thumbnail',
  template: `
   <div class="card">
    <div class="card-header">
      <h5>{{event.cityName}}, {{event.stateAB}}</h5>
    </div>
    <div class="card-content">
      <br />{{event.weatherIcon}}
      <br />{{event.currentWeather}}
      <br />{{event.summary}}
    </div>
   </div>
  `,
  styleUrls: ['./weather.component.css']
})
export class WeatherThumbnailComponent {
  @Input() event: any
}
