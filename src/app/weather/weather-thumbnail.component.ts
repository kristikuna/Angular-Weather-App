import { Component, Input } from '@angular/core'

@Component({
  selector: 'weather-thumbnail',
  template: `
   <div class="card">
   <div class="card-header">
    <h5>{{event.cityName}}, {{event.stateAB}}</h5></div>
    <br />{{event.weatherIcon}}
    <br />{{event.currentWeather}}
    <br />{{event.summary}}
   </div>
  `,
  styles: [`

  .card-header{
    width: 100%;
    max-height: 20rem;
    position: relative;
    border-radius: 1rem;
    z-index: 1;
    justify-items: center;
    text-alignment: center;
  }
  .card{
    background-color: white;
    height: 100%;
    width: 100%;
    border-radius: 1.75rem;
    position: relative;
    text-alignment: center;
    display: grid;
    grid-template-columns: 2fr;
    grid-template-rows: 0.5fr 2.25fr;
    justify-items: center;
    /* cursor: pointer; */
}

  `]
})
export class WeatherThumbnailComponent {
  @Input() event: any
}
