import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeesService } from 'src/app/services/employees.service';




@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  EmployeeAddForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _employeeService: EmployeesService
    ) { }

  ngOnInit(): void {
    this.EmployeeAddForm = this.formBuilder.group({
      Type: [''],
      Name:[''],
      Address:[''],
      NIC:[''],
      BankAccountNo: [''],
      Skillset:[''],
      DOB:[''],
      DateOfJoin:[''],
      Salary:['']
    });

  }
  handleSubmit(){
    this._employeeService.saveEmployee(this.EmployeeAddForm.value);
  }
 
  
  
}
