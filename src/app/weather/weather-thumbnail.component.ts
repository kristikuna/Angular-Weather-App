import { Component, Input } from '@angular/core'

@Component({
  selector: 'weather-thumbnail',
  template: `
   <div class="card">
    <h3>{{event.cityName}}, {{event.state}}</h3>
    <p>{{event.summary}}</p>
   </div>
  `,
  styles: [`
    .card{
      border-radius: 0%;
      height: 10rem;
      margin: 10px;
      padding: 10px;
    }
  `]
})
export class WeatherThumbnailComponent {
  @Input() event: any
}
