import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'https://regres.in/api/users';
  constructor(private http: HttpClient) { }

  buscarUsuarios(page: number) {
    return this.http.get(`${this.url}?page=${page}`);
  }
}
