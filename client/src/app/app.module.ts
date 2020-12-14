import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AddComponent } from './components/employee/add/add.component';
import { ClientComponent } from './components/client/client.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EmployeelistComponent } from './components/employeelist/employeelist.component'; 
import { Route, RouterModule, Routes } from '@angular/router';


const appRoutes :Routes=[
  {path:'employeelist', component:EmployeelistComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployeeComponent,
    AddComponent,
    ClientComponent,
    EmployeelistComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
