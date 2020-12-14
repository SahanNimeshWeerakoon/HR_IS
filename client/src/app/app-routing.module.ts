import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddclientComponent } from './components/client/addclient/addclient.component';
import { TestComponent } from './components/test/test.component';
import {ClientlistComponent} from './components/client/clientlist/clientlist.component';

const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'addClient', component: AddclientComponent },
  { path: 'clientList', component: ClientlistComponent},
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
