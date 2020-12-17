import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './components/employee/add/add.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AddclientComponent } from './components/client/addclient/addclient.component';
import { TestComponent } from './components/test/test.component';
import {ClientlistComponent} from './components/client/clientlist/clientlist.component';
import { EditClientComponent } from './components/client/edit-client/edit-client.component';


const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path:'addEmployee', component: AddComponent } ,
  { path: 'Employee', component: EmployeeComponent },
  { path: 'addClient', component: AddclientComponent },
  { path: 'clientList', component: ClientlistComponent},
  {path: 'edit-client/:id', component:EditClientComponent},
  {
    path:'',
    pathMatch:'full',
    redirectTo:'clientList'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
