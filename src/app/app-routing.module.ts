import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather-container.component';
import { WeatherDetailsComponent } from './weather/weather-details/weather-details.component';

const routes: Routes = [
  { path: 'weather', component: WeatherComponent },
  { path: '', component: WeatherComponent },
  { path: 'weather/:id', component: WeatherDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
