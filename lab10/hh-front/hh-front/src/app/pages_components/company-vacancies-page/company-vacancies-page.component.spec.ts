import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyVacanciesPageComponent } from './company-vacancies-page.component';

describe('CompanyVacanciesPageComponent', () => {
  let component: CompanyVacanciesPageComponent;
  let fixture: ComponentFixture<CompanyVacanciesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyVacanciesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyVacanciesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
