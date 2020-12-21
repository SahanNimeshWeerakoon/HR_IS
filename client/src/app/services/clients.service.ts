import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
    return this.http.get(`http://localhost:5000/client/${id}`);
  }
  // Fetch all clients
  fetchClient(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:5000/client');
  }

  //saving client 
  saveClient(client) {
    return this.http.post('http://localhost:5000/client/addclient', client);
  }

  // Find employee from id
  find(id) {
   return this.http.get(`http://localhost:5000/client/find/${id}`);
  }

  // Delte client
  deleteClient(id): Observable<any> {
    return this.http.delete(`http://localhost:5000/client/delete/${id}`);
  }
  

}