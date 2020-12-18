import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map }  from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  
  employee: any;
  
  
  constructor(private http:HttpClient) { }
  
  validateRegister(employee: { Type: String, Name: String, Address: String, NIC: String, BankAccountNo: String, Skills: String, DOB: Date, DateOfJoin: Date, Salary: any }) {
    throw new Error('Method not implemented.');
  }

  //save employee
 addemployee(employee){
    return this.http.post('http://localhost:5000/employee/addEmployee', employee )
   .pipe(map(res => {
    return res;
  }))  
 }

 // Get all employees
 fetchEmployee():Observable<any[]>{
   return this.http.get<any[]>('http://localhost:5000/employee');
 }

 // Find employee from id
 find(id) {
  return this.http.get(`http://localhost:5000/employee/find/${id}`);
 }
 findEmployee(id): Observable<any> {
  return this.http.get(`http://localhost:5000/employee/find/${id}`);
 }
 updateEmployee(id, data): Observable<any> {
  return this.http.put(`http://localhost:5000/employee/${id}`, data);
 }
}
