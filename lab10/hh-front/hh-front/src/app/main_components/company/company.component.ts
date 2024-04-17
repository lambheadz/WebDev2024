import { Component } from '@angular/core';
import { ICompany } from '../../models/company';
import { Router } from '@angular/router';
import { Input } from '@angular/core';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent {
  @Input()
  company!: ICompany;
  constructor(private router: Router) {}
  viewVacancies(company: ICompany) {
    this.router.navigate(['/companies', company.id, 'vacancies']);
  }
}
