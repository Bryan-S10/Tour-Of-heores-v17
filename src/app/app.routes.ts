import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {path:'heroes', component:HeroesComponent},
  {path:'detail/:id', component:HeroDetailComponent},
  // {path:'**', component:HeroesComponent},
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },

];
