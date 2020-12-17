import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  constructor(private http: HttpClient) { }

  //update client
  update(id, data): Observable<any>{
    return this.http.put(`http://localhost:5000/client/${id}`, data);
  }

  //getting client
  getClient(id): Observable<any> {
    console.log(id);
    return this.http.get(`http://localhost:5000/client/${id}`);
    
  }
  fetchClient(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:5000/client');
  }

  //saving client 
  saveClient(values) {

    return console.log(values);
  }
  

}