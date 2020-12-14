import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';





@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {


  EmployeeAddForm:FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private _employeeService: EmployeesService,
   
    private router: Router,
    
    ) {
     
     
     }

  ngOnInit(): void {
    this.EmployeeAddForm = this.formBuilder.group({
      Type: [''],
      Name:[''],
      Address: [''],
      NIC: [''],
      BankAccountNo: [''],
      Skillset: [''],
      DOB: [''],
      DateOfJoin: [''],
      Salary: [''],
    });
   
      
    }


  handleSubmit(){

  this._employeeService.addemployee(this.EmployeeAddForm.value)
  .subscribe(
    Response =>    
    this.router.navigate(['Employee']),
    error => alert('fail'),
 
  );
  
 }

 
    }

 
    

 

  

