import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employeelist: any[];
 
  constructor (
    private employeeservice:EmployeesService,
    private router: Router,
  ) { }

  deleteEmployee(id) {
    this.employeeservice.deleteEmployee(id)
      .subscribe(resp => {
        if(resp.success) {
          this.ngOnInit();
        } else {
          console.log('Delete emploiyee error');
        }
      });
  }
  
  ngOnInit():void{
    this.employeeservice.fetchEmployee()
    .subscribe(res => {
      this.employeelist = res;
    })  
  }
  
}

