import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ClientlistComponent } from '../components/client/clientlist/clientlist.component';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor( private http : HttpClient) { }

 url: string = "http://localhost:5000/client/addclient";
  getClientList(){
    return this.http.get<ClientData[]>(this.url);

  }
  
}
