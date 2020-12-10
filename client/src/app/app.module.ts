import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AddclientComponent } from './components/client/addclient/addclient.component';
import { ClientComponent } from './components/client/client.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule} from '@angular/material/button';
import { MatChipsModule} from '@angular/material/chips';
import { MatSliderModule } from '@angular/material/slider';
import { from } from 'rxjs';
import { NavComponent } from './components/client/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CalenderComponent } from './components/client/calender/calender.component';
import { ClientsService } from 'src/app/services/clients.service';
import { AddclientService } from 'src/app/services/addclient.service';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployeeComponent,
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
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatChipsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [AddclientService,ClientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
