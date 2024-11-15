// src/app/app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; // Assurez-vous d'importer le module de routage
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component'; // Assurez-vous que le chemin est correct
import { AuthService } from './auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { WaterComponent } from './water/water.component';
import { CategoriesComponent } from './categories/categories.component';
import { ActivityComponent } from './activity/activity.component';
import { WaterIntakeHistoryComponent } from './water-intake-history/water-intake-history.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    WaterComponent,
    CategoriesComponent,
    ActivityComponent,
    WaterIntakeHistoryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule, // Ajoutez ceci pour le routage
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
