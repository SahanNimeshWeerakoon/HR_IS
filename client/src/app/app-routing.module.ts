import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddclientComponent } from './components/client/addclient/addclient.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'addClient', component: AddclientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
