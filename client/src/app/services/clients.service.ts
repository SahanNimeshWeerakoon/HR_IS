import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor() { }

  //saving client 
  saveClient(values) {

    return console.log(values);
  }
}