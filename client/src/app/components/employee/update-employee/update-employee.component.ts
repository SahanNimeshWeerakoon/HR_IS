import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

  EmployeeAddForm:FormGroup
  id = this.route.snapshot.paramMap.get('id');

  constructor(
    private formBuilder: FormBuilder,
    private _employeeService: EmployeesService,
    private _commonService: CommonService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  
  updateShits() {
    this._employeeService.updateEmployee(this.id, this.EmployeeAddForm.value)
      .subscribe(resp => {
        if(resp.status == true) {
          this.router.navigate(['/dashboard/employees'])
        } else {
          console.log('Update employee failed');
        }
      })
  }
  ngOnInit(): void {
    this.EmployeeAddForm = this.formBuilder.group({
      Type: [" "],
      Name:[" "],
      Address:[" "],
      NIC:[" "],
      BankAccountNo:[" "],
      Skillset:[" "],
      DOB:[" "],
      DateOfJoin:[" "],
      Salary:[" "]

    })
    this._employeeService.findEmployee(this.id)
      .subscribe(employee =>{
        
        var dob = this._commonService.formatDate(employee.DOB);
        var joinDate = this._commonService.formatDate(employee.DateOfJoin);
        
        this.EmployeeAddForm = this.formBuilder.group({
          Type: [employee.Type],
          Name:[employee.Name],
          Address:[employee.Address],
          NIC: [employee.NIC],
          BankAccountNo:[employee.BankAccountNo],
          Skillset:[employee.Skillset],
          DOB:[dob],
          DateOfJoin:[joinDate],
          Salary:[employee.Salary]
        })
      })
  }
}
