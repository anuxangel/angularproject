import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {
  private apiUrl = 'http://your-api-endpoint.com/api'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  getArtworks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/artworks`);
  }

  placeOrder(order: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/orders`, order);
  }
}
