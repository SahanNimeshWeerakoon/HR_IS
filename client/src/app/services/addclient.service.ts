import { Injectable } from '@angular/core';
import {HttpClient,Headers} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddclientService {
  addClientToken: any;
  client:any;

  constructor(private http:HttpClient) { }

  addClient(client):Observable<any>{
     //let headers = new Headers();
     //header.append('Content-Type','application/json');
     return this.http.post('http://localhost:5000/client/addclient',client);
  }
}
 
