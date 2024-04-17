import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompaniesPageComponent } from './pages_components/companies-page/companies-page.component';
import { CompanyVacanciesPageComponent } from './pages_components/company-vacancies-page/company-vacancies-page.component';
import { HomePageComponent } from './pages_components/home-page/home-page.component';
import { Top10VacanciesPageComponent } from './pages_components/top10-vacancies-page/top10-vacancies-page.component';
import { VacancyPageComponent } from './pages_components/vacancy-page/vacancy-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'vacancy/:id', component: VacancyPageComponent },
  { path: 'companies', component: CompaniesPageComponent },
  { path: 'companies/:id/vacancies', component: CompanyVacanciesPageComponent },
  { path: 'top10_vacancies', component: Top10VacanciesPageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}