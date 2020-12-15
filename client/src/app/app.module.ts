import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AddComponent } from './components/employee/add/add.component';
import { EmployeelistComponent } from './components/employee/employeelist/employeelist.component';




import { AddclientComponent } from './components/client/addclient/addclient.component';
import { ClientComponent } from './components/client/client.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/client/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CalenderComponent } from './components/client/calender/calender.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule} from '@angular/material/button';
import { MatChipsModule} from '@angular/material/chips';
import { MatSliderModule } from '@angular/material/slider';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployeeComponent,
    AddComponent,
    EmployeelistComponent,
    
    AddclientComponent,
    ClientComponent,
    NavComponent,
    CalenderComponent
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
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
