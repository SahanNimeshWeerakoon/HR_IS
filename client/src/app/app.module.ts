import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
<<<<<<< HEAD
import { EmployeeComponent } from './component/employee/employee.component';
=======
import { ClientComponent } from './components/client/client.component';
>>>>>>> 0c5ad62f322c6a4e46319bc831f88977ba33a11b

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
<<<<<<< HEAD
    EmployeeComponent
=======
    ClientComponent
>>>>>>> 0c5ad62f322c6a4e46319bc831f88977ba33a11b
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
