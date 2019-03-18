import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-nav-bar></app-nav-bar>
    <app-weather></app-weather>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'team-violet';
}
