import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpComponent } from './Comp/emp/emp.component';
import { EmpListComponent } from './Comp/emp-list/emp-list.component';
import { AddEmpComponent } from './Comp/add-emp/add-emp.component';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './Comp/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    EmpListComponent,
    AddEmpComponent,
    AboutComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
