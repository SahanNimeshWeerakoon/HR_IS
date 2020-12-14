import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

 

  constructor (
    private employeeservice:EmployeesService,
    private router: Router,

    ) { }
  ngOnInit() {}

  
  
   
  
  }

