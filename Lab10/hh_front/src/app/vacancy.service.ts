import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company, Vacancy} from "./models";

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
    BASE_URL = 'http://127.0.0.1:8000'
    constructor(private client: HttpClient) { }

    getVacancies():Observable<Vacancy[]>{
        return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/vacancies/`)
    }
    deleteVacancy(vacancy_id:number):Observable<any>{
        return this.client.delete(`${this.BASE_URL}/api/vacancies/${vacancy_id}/`)
    }
    getCompany_vacancies(company:Company):Observable<Vacancy[]>{
        return this.client.get<Vacancy[]>(
        `${this.BASE_URL}/api/companies/${company.id}/vacancies/`
        )
    }
}