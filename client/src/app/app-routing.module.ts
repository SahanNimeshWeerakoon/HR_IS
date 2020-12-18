import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './components/employee/add/add.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AddclientComponent } from './components/client/addclient/addclient.component';
import { TestComponent } from './components/test/test.component';
import { ClientlistComponent } from './components/client/clientlist/clientlist.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { DashboardComponent } from './authentication/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { ViewEmployeeComponent } from './components/employee/view-employee/view-employee.component';
import { ViewClientComponent } from './components/client/view-client/view-client.component';


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
      { path: 'employees', component: EmployeeComponent },
      { path: 'employee/:id', component: ViewEmployeeComponent },
      { path:'addEmployee', component: AddComponent } ,
      { path: 'clients', component: ClientlistComponent},
      { path: 'client/:id', component: ViewClientComponent},
      { path: 'addClient', component: AddclientComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
