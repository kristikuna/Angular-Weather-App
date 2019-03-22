import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherContainer } from './weather/weather-container.component';
import { WeatherDetailsComponent } from './weather/weather-details/weather-details.component';
import { WeatherCardAddComponent } from './weather/weather-card-add/weather-card-add.component';
import { AboutComponent } from './weather/about/about.component';

const routes: Routes = [
  { path: 'weather', component: WeatherContainer },
  { path: 'add', component: WeatherCardAddComponent },
  { path: 'about', component: AboutComponent },
  { path: 'weather/:id', component: WeatherDetailsComponent },
  { path: '', redirectTo: '/weather', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
