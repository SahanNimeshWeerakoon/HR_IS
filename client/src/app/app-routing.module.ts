import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './components/employee/add/add.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path:'addEmployee', component: AddComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
