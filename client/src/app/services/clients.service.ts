import { HttpClient } from '@angular/common/http';
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
  saveClient(values) {

    return console.log(values);
  }
}