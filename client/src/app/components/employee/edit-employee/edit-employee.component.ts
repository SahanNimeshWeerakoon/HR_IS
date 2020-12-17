import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Event, Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  EmployeeAddForm:FormGroup


  constructor(
    private formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private employeeService: EmployeesService
  ) {}
id = this.router.snapshot.paramMap.get('id');

ngOnInit(): void {
this.employeeService.findEmployee(this.id)
.subscribe(employee =>{
  console.log(employee);
  this.EmployeeAddForm = this.formBuilder.group({
    
    Name:[employee.Name],
    Address:[employee.Address],
    NIC:[employee.NIC],
    BankAccountNo:[employee.BankAccountNo],
    Skillset:[employee.Skillset],
    DOB:[employee.DOB],
    DateOfJoin:[employee.DateOfJoin],
    Salary:[employee.Salary]
    
  });
})

this.EmployeeAddForm = this.formBuilder.group({
    
  Type:[""], 
  Name:[""],
  Address:[""],
  NIC:[""],
  BankAccountNo:[""],
  Skillset:[""],
  DOB:[""],
  DateOfJoin:[""],
  Salary:[""]
});
}
}
