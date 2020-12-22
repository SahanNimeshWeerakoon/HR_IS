import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './components/employee/add/add.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AddclientComponent } from './components/client/addclient/addclient.component';
import { TestComponent } from './components/test/test.component';
import {ClientlistComponent} from './components/client/clientlist/clientlist.component';
import { EditClientComponent } from './components/client/edit-client/edit-client.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { DashboardComponent } from './authentication/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { ViewEmployeeComponent } from './components/employee/view-employee/view-employee.component';
import { ViewClientComponent } from './components/client/view-client/view-client.component';
import { UpdateEmployeeComponent } from './components/employee/update-employee/update-employee.component';
import { ProjectComponent } from './components/project/project.component';
import { AddProjectComponent } from './components/project/add-project/add-project.component';
<<<<<<< HEAD
import { EditprojectComponent } from './components/project/editproject/editproject.component';


=======
import { OnGoingProjectsComponent } from './authentication/dashboard/on-going-projects/on-going-projects.component';
>>>>>>> e8789bb4821cade45260b17a98f5f671d9b58bb6

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'test', component: TestComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
<<<<<<< HEAD
      // { path: 'employees', component: EmployeeComponent },
      // { path: 'employee/:id', component: ViewEmployeeComponent },
      // { path:'addEmployee', component: AddComponent } ,
      // { path: 'clients', component: ClientlistComponent},
      // { path: 'client/:id', component: ViewClientComponent},
      // { path: 'addClient', component: AddclientComponent },
      // { path: 'updateEmployee/:id', component: UpdateEmployeeComponent },
      // {path: 'editClient/:id', component:EditClientComponent},
=======
      { path: '', component: OnGoingProjectsComponent, canActivate: [AuthGuard] },
>>>>>>> e8789bb4821cade45260b17a98f5f671d9b58bb6
      { path: 'employees', component: EmployeeComponent, canActivate: [AuthGuard] },
      { path: 'employee/:id', component: ViewEmployeeComponent, canActivate: [AuthGuard] },
      { path:'addEmployee', component: AddComponent, canActivate: [AuthGuard] },
      { path: 'clients', component: ClientlistComponent, canActivate: [AuthGuard] },
      { path: 'client/:id', component: ViewClientComponent, canActivate: [AuthGuard] },
      { path: 'addClient', component: AddclientComponent, canActivate: [AuthGuard] },
      {path: 'editClient/:id', component:EditClientComponent, canActivate: [AuthGuard] },
      { path: 'updateEmployee/:id', component: UpdateEmployeeComponent, canActivate: [AuthGuard] },
      { path: 'projects', component: ProjectComponent, canActivate: [AuthGuard] },
      { path: 'addProject', component: AddProjectComponent, canActivate: [AuthGuard] },
<<<<<<< HEAD
      { path: 'project/:id', component: EditprojectComponent, canActivate: [AuthGuard]}
=======
>>>>>>> e8789bb4821cade45260b17a98f5f671d9b58bb6
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
