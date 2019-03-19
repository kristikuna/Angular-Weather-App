import { Component, Input } from '@angular/core'

@Component({
  selector: 'weather-thumbnail',
  template: `
   <div class="card">
    <div class="card-header">
      <h5>{{data.name}}</h5>
    </div>
    <div class="card-content">
      <br />{{data.main.temp}} &#176;
      <br />{{data.main.humidity}}
      <br />{{data.weather.description}}
      <br />{{data.weather.icon}}
    </div>
   </div>
  `,
  styleUrls: ['./weather-container.component.css']
})
export class WeatherThumbnailComponent {
  @Input() data: any
}
