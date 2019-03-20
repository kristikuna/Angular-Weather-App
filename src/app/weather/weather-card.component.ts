import { Component, Input } from '@angular/core';

@Component({
  selector: 'tv-weather-card',
  template: `
   <div class="card">
    <div class="card-header">
      <h5>{{data.name}}</h5>
    </div>
    <div class="card-content">
      <br />{{data.main.temp}} &#176;
      <br />placeholder for temp in cesius
      <br />{{data.weather.description}}
      <div [ngSwitch]="data.weather.description">
        <img *ngSwitchCase="'overcast clouds'" src="assets/cloudy.png" alt="">
        <img *ngSwitchCase="'sunny'" src="assets/sunny.png" alt="">
        <img *ngSwitchCase="'snow'" src="assets/snow.png" alt="">
        <img *ngSwitchCase="'rainy'" src="assets/rain.png" alt="">
        <img *ngSwitchCase="'partly cloudy'" src="assets/partly_cloudy.png" alt="">
      </div>
    </div>
   </div>
  `,
  styleUrls: ['./weather-container.component.css']
})
export class WeatherCardComponent {
  @Input() data: any
}
