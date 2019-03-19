import { Component, Input } from '@angular/core'

@Component({
  selector: 'weather-thumbnail',
  template: `
   <div class="card">
    <div class="card-header">
      <h5>{{data.cityName}}, {{data.stateAB}}</h5>
    </div>
    <div class="card-content">
      <br />{{data.weatherIcon}}
      <br />{{data.currentWeather}}
      <br />{{data.summary}}
    </div>
   </div>
  `,
  styleUrls: ['./weather-container.component.css']
})
export class WeatherThumbnailComponent {
  @Input() data: any
}
