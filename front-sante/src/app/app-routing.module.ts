// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { WaterComponent } from './water/water.component';
import { CategoriesComponent } from './categories/categories.component';
import { ActivityComponent } from './activity/activity.component';
import { WaterIntakeHistoryComponent } from './water-intake-history/water-intake-history.component';
const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'water', component: WaterComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'activity', component: ActivityComponent },
  { path: 'water-intake-history/:userId', component: WaterIntakeHistoryComponent },
  {
    path: '**',
    redirectTo: '/dashboard'
  },
  { path: 'dashboard',  component: DashboardComponent,  canActivate: [AuthGuard] }
  // Ajoutez d'autres routes ici
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
