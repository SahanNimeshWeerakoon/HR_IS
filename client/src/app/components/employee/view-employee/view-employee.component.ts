import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {
  employee: any;
  empProps: any;
  id: String;
  EmployeeAddForm:FormGroup

  constructor(
    private employeeService: EmployeesService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.paramMap.get('id');
    this.employeeService.findEmployee(this.id)
      .subscribe((emp: any) => {
        this.employee = emp;
        this.empProps = Object.getOwnPropertyNames(this.employee);
      })
  
    }
    handleSubmit(){
      console.log('aa');
    }
    
  
    }
