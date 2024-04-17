import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { CompanyComponent } from './main_components/company/company.component';
import { VacancyComponent } from './main_components/vacancy/vacancy.component';
import { AuthInterceptor } from './AuthInterceptor';
import { HomePageComponent } from './pages_components/home-page/home-page.component';
import { Top10VacanciesPageComponent } from './pages_components/top10-vacancies-page/top10-vacancies-page.component';
import { CompaniesPageComponent } from './pages_components/companies-page/companies-page.component';
import { VacancyPageComponent } from './pages_components/vacancy-page/vacancy-page.component';
import { CompanyVacanciesPageComponent } from './pages_components/company-vacancies-page/company-vacancies-page.component';

@NgModule({
  declarations: [
    AppComponent,
    // CompanyComponent,
    // VacancyComponent,
    HomePageComponent,
    Top10VacanciesPageComponent,
    CompaniesPageComponent,
    VacancyPageComponent,
    CompanyVacanciesPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppConfig {}