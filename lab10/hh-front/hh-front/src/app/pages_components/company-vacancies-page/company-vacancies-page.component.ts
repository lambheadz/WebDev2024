import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IVacancy } from '../../models/vacancy';
import { VacancyService } from '../../services/vacancy.service';

@Component({
  selector: 'app-company-vacancies-page',
  templateUrl: './company-vacancies-page.component.html',
  styleUrls: ['./company-vacancies-page.component.css'],
})
export class CompanyVacanciesPageComponent {
  vacancies: IVacancy[] = [];
  company_id!: number;
  loading = false;

  constructor(
    private vacancyService: VacancyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.company_id = this.route.snapshot.params['id'];
    this.vacancyService.getCompanyVacancies(this.company_id).subscribe((data) => {
      this.loading = false;
      this.vacancies = data;
    });
  }
}