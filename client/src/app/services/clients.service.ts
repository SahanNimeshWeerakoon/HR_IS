import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  constructor(private http: HttpClient) { }

  fetchClient(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:5000/client');
  }

  //saving client 
  saveClient(client) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:5000/client/addclient', client, { headers });
  }
}