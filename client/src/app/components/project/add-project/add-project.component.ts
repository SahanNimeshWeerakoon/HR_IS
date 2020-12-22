import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';
import { EmployeesService } from 'src/app/services/employees.service';
import { ProjectService } from 'src/app/services/project.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  clients = [];
  devs = [];
  selectedDevs = [];
  projectAddForm: FormGroup;

  constructor(
    private clientService: ClientsService,
    private employeeService: EmployeesService,
    private projectService: ProjectService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) { }

  handleDevs(event) {
    const remainingDevs = this.devs.filter(dev => {
      if(dev._id == event.target.value) {
        this.selectedDevs = [
          ...this.selectedDevs,
          dev
        ]
        return false;
      } else {
        return true;
      }
    });

    this.devs = [
      ...remainingDevs
    ]
  }

  handleSubmit() {
    const data = {
      ...this.projectAddForm.value,
      devs: [ ...this.selectedDevs ]
    };

    if(this.projectAddForm.invalid) {
      this.projectAddForm.controls['name'].markAllAsTouched();
      this.projectAddForm.controls['description'].markAllAsTouched();
      this.projectAddForm.controls['client'].markAllAsTouched();
      this.projectAddForm.controls['deadline'].markAllAsTouched();
    } else {
      this.projectService.addProject(data)
        .subscribe(resData => {
          if(resData.success) {
            this.toastr.success('Project add successfull');
            this.router.navigate(['/dashboard/projects']);
          } else {
            this.toastr.error('Project add error');
          }
        });
    }
  }

  ngOnInit(): void {
    this.projectAddForm = this.formBuilder.group({
      name: new FormControl('', [ Validators.required ]),
      description: new FormControl('', [ Validators.required ]),
      client: new FormControl('', [ Validators.required ]),
      deadline: new FormControl('', [ Validators.required ]),
    });

    this.clientService.fetchClient()
      .subscribe(resClients => {
        this.clients = [
          ...resClients
        ]
      });

    this.employeeService.findEmpFromDep('developing')
      .subscribe(resEmployees => {
        this.devs = [
          ...resEmployees
        ]
      })
  }

  get name() { return this.projectAddForm.get('name'); }
  get description() { return this.projectAddForm.get('description'); }
  get client() { return this.projectAddForm.get('client'); }
  get deadline() { return this.projectAddForm.get('deadline'); }

}
