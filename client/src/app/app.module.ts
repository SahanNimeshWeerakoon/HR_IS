import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AddComponent } from './components/employee/add/add.component';
import { AddclientComponent } from './components/client/addclient/addclient.component';
import { ClientComponent } from './components/client/client.component';
import { NavComponent } from './components/client/nav/nav.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { DashboardComponent } from './authentication/dashboard/dashboard.component';
import { CalenderComponent } from './components/client/calender/calender.component';
import { AuthInterceptor } from './auth.interceptor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ClientsService } from 'src/app/services/clients.service';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule} from '@angular/material/button';
import { MatChipsModule} from '@angular/material/chips';
import { MatSliderModule } from '@angular/material/slider';
import { EditClientComponent } from './components/client/edit-client/edit-client.component';
import { DashboardNavComponent } from './components/inc/dashboard-nav/dashboard-nav.component';
import { ClientlistComponent } from './components/client/clientlist/clientlist.component';
import { ViewEmployeeComponent } from './components/employee/view-employee/view-employee.component';
import { ViewClientComponent } from './components/client/view-client/view-client.component';
import { UpdateEmployeeComponent } from './components/employee/update-employee/update-employee.component';
import { EditprojectComponent } from './components/project/editproject/editproject.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployeeComponent,
    AddComponent,
    AddclientComponent,
    ClientlistComponent,
    ClientComponent,
    NavComponent,
    CalenderComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    DashboardNavComponent,
    ViewEmployeeComponent,
    ViewClientComponent,
    EditClientComponent,
    UpdateEmployeeComponent,
    EditprojectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatChipsModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    ClientsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
