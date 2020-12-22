import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';
import { ToastrService } from 'ngx-toastr';

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
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.EmployeeAddForm = this.formBuilder.group({
      Type: ['', [ Validators.required ]],
      Name:['', [ Validators.required ]],
      Address: ['', [ Validators.required ]],
      NIC: ['', [ Validators.required ]],
      BankAccountNo: ['', [ Validators.required ]],
      Dep: ['', [ Validators.required ]],
      Skillset: ['', [ Validators.required ]],
      DOB: ['', [ Validators.required ]],
      DateOfJoin: ['', [ Validators.required ]],
      Salary: ['', [ Validators.required ]],
    });
  }

  handleSubmit(){
    if(this.EmployeeAddForm.invalid) {
      this.Name.markAllAsTouched();
      this.Type.markAllAsTouched();
      this.Address.markAllAsTouched();
      this.NIC.markAllAsTouched();
      this.BankAccountNo.markAllAsTouched();
      this.Dep.markAllAsTouched();
      this.Skillset.markAllAsTouched();
      this.DOB.markAllAsTouched();
      this.DateOfJoin.markAllAsTouched();
      this.Salary.markAllAsTouched();
    } else {
      this._employeeService.addemployee(this.EmployeeAddForm.value)
      .subscribe( Response => {
        this.toastr.success('Employee add successfull');
        this.router.navigate(['/dashboard/employees']);
      });
    }
  }

  get Name() { return this.EmployeeAddForm.get('Name'); }
  get Type() { return this.EmployeeAddForm.get('Type'); }
  get Address() { return this.EmployeeAddForm.get('Address'); }
  get NIC() { return this.EmployeeAddForm.get('NIC'); }
  get BankAccountNo() { return this.EmployeeAddForm.get('BankAccountNo'); }
  get Dep() { return this.EmployeeAddForm.get('Dep'); }
  get Skillset() { return this.EmployeeAddForm.get('Skillset'); }
  get DOB() { return this.EmployeeAddForm.get('DOB'); }
  get DateOfJoin() { return this.EmployeeAddForm.get('DateOfJoin'); }
  get Salary() { return this.EmployeeAddForm.get('Salary'); }
}

 
    

 

  

