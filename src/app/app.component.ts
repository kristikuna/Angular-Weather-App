import { Component } from '@angular/core';

@Component({
  selector: 'tv-root',
  template: `
    <tv-nav-bar></tv-nav-bar>
    <router-outlet></router-outlet>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'team-violet';
}
