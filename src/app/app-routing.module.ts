import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherContainer } from './weather/weather-container.component';
import { WeatherDetailsComponent } from './weather/weather-details/weather-details.component';

const routes: Routes = [
  { path: 'weather', component: WeatherContainer },
  { path: 'weather/:id', component: WeatherDetailsComponent },
  { path: '', redirectTo: '/weather', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
