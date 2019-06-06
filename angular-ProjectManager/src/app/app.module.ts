import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ViewTaskComponent } from './components/view-task/view-task.component';
import { listTaskService } from './models/list-task.service';
import { FilterPipe } from './models/filter.pipe';
import { ProjectFilter } from './models/filter.pipe';
import { TaskFilter} from './models/filter.pipe';

export  const  appRoutes : Routes =[
  {path: 'addproject', component: AddProjectComponent},
  {path: 'addtask', component: AddTaskComponent},
  {path: 'adduser', component: AddUserComponent},
  {path: 'viewtask', component: ViewTaskComponent},
  {path: '', redirectTo: '/addproject' , pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    AddProjectComponent,
    AddTaskComponent,
    AddUserComponent,
    ViewTaskComponent,
    FilterPipe,
    ProjectFilter,
    TaskFilter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [listTaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
