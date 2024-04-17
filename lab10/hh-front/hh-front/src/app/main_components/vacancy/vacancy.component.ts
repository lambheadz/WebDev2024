import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { IVacancy } from '../../models/vacancy';

@Component({
  selector: 'app-vacancy',
  standalone: true,
  imports: [],
  templateUrl: './vacancy.component.html',
  styleUrl: './vacancy.component.css'
})
export class VacancyComponent {
  @Input() vacancy: IVacancy | undefined;

  constructor(private router: Router) {}
  
  viewDetails(vacancy: IVacancy) {
    this.router.navigate(['/vacancy', vacancy.id]);
  }
}