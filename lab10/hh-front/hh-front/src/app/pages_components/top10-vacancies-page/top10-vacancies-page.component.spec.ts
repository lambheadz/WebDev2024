import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top10VacanciesPageComponent } from './top10-vacancies-page.component';

describe('Top10VacanciesPageComponent', () => {
  let component: Top10VacanciesPageComponent;
  let fixture: ComponentFixture<Top10VacanciesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Top10VacanciesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Top10VacanciesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
