import django.db


class Company(django.db.models.Model):
    name = django.db.models.CharField(max_length=255)
    description = django.db.models.TextField()
    city = django.db.models.CharField(max_length=255)
    address = django.db.models.TextField()

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'

    def __str__(self):
        return f'{self.id}, {self.name}, {self.city}, {self.address}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        }


class Vacancy(django.db.models.Model):
    name = django.db.models.CharField(max_length=255)
    description = django.db.models.TextField()
    salary = django.db.models.FloatField()
    company = django.db.models.ForeignKey(Company, on_delete=django.db.models.CASCADE)

    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'
        ordering = ['-salary']

    def __str__(self):
        return f'{self.id}, {self.name}, {self.company}, {self.salary}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'company': self.company.name,
        }
