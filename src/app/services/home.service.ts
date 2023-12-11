import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
 // private apiUrl = 'https://mocki.io/v1/e5f52019-7f17-445e-b9b8-088674aede35'; // Example API URL, replace it with your API URL

  constructor(private http: HttpClient) {}

  getAllHomeObjects(): Observable<any[]> {
    const url = `https://mocki.io/v1/e5f52019-7f17-445e-b9b8-088674aede35`;
    return this.http.get<any[]>(url);
  }
}
