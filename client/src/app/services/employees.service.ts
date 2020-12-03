import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }

  //save employee
  saveEmployee(values){
    return console.log(values);
  }
}
