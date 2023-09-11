import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Diabetico } from './diabetico';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class DiabeticosService {
    baseUrl = environment.baseUrl
  
    constructor(private http: HttpClient) { }
  
    getDiabeticos() {
      return this.http.get<any>(`${this.baseUrl}/getAll.php`);
    }
  
    getDiabetico(id: string | number) {
      return this.http.get(`${this.baseUrl}/get.php?id=${id}`);
    }
  
    addDiabetico(diabetico: Diabetico) {
      return this.http.post(`${this.baseUrl}/post.php`, diabetico);
    }
  
    deleteDiabetico(diabetico: Diabetico) {
      return this.http.delete(`${this.baseUrl}/delete.php?idMascota=${diabetico.id}`);
    }
  
    updateDiabetico(diabetico: Diabetico) {
      return this.http.put(`${this.baseUrl}/update.php`, diabetico);
    }
  }
