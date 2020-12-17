import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  constructor(private http: HttpClient) { }

<<<<<<< HEAD
  //update client
  update(id, data): Observable<any>{
    return this.http.put(`http://localhost:5000/client/${id}`, data);
  }

  //getting client
  getClient(id): Observable<any> {
    console.log(id);
    return this.http.get(`http://localhost:5000/client/${id}`);
    
  }
=======
  // Fetch all clients
>>>>>>> 5c4d70d57ee34c8d4534f89d0f1ae2314d558def
  fetchClient(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:5000/client');
  }

  //saving client 
  saveClient(client) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:5000/client/addclient', client, { headers });
  }

  // Find employee from id
  find(id) {
   return this.http.get(`http://localhost:5000/client/find/${id}`);
  }
  

}