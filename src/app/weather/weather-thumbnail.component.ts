import { Component, Input } from '@angular/core'

@Component({
  selector: 'weather-thumbnail',
  template: `
   <div class="well hoverwell thumbnail">
    <h2>{{event.cityName}}, {{event.state}}</h2>
   </div>
  `,
  styles: [`
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
  `]
})
export class WeatherThumbnailComponent {
  @Input() event: any
}
