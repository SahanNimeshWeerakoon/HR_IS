import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, SelectControlValueAccessor, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClientsService } from 'src/app/services/clients.service';
import { CommonService } from 'src/app/services/common.service';
import { EmployeesService } from 'src/app/services/employees.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.component.html',
  styleUrls: ['./editproject.component.scss']
})
export class EditprojectComponent implements OnInit {
  clients = [];
  devs = [];
  selectedDevs = [];
  projectAddForm: FormGroup;
  id = this.route.snapshot.paramMap.get('id');

  constructor(
    private clientService: ClientsService,
    private employeeService: EmployeesService,
    private projectService: ProjectService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private _commonservice: CommonService
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

  updateproject() {
    this.projectService.updatepro(this.id, this.projectAddForm.value)
      .subscribe(resp => {
        if(resp.status == true) {
          this.toastr.success('Project details update successfull');
          this.router.navigate(['/dashboard/projects'])
        } else {
          this.toastr.error('Project details update failed');
        }
      })
  }
  ngOnInit(): void {
    this.projectAddForm = this.formBuilder.group({
      name: [" "],
      description: [" "],
      client: [" "],
      deadline: [" "],
      developers:[" "]
    });

    this.projectService.findproject(this.id)
    .subscribe(project => {

      var deadline = this._commonservice.formatDate(project.deadline);
      this.projectAddForm = this.formBuilder.group({


        name: [project.name],
        description:[project.description],
        client:[project.client],
        deadline:[deadline],
        developers:[project.developers]
        
      })
      
    })

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
}
