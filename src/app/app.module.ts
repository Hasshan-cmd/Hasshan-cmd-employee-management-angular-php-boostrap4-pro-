import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { EmployeeFormComponent } from './views/employee/employee-form/employee-form.component';
import { EmployeeTableComponent } from './views/employee/employee-table/employee-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import { EmployeeDetailComponent } from './views/employee/employee-detail/employee-detail.component';
import { EmployeeUpdateFormComponent } from './views/employee/employee-update-form/employee-update-form.component';
import {MatCardModule} from "@angular/material/card";
import { MainWindowComponent } from './views/main-window/main-window.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatBadgeModule} from "@angular/material/badge";
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    EmployeeTableComponent,
    EmployeeDetailComponent,
    EmployeeUpdateFormComponent,
    MainWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatBadgeModule,
    MatMenuModule,
    MatSidenavModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
