//import {Http,Response,RequestOptions,Headers} from '@angular/http';
import {HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
//import {Task} from './task';
import {AddProject} from './add-project';
import {AddUser} from './add-user';
import {AddTask} from './add-task';
import {AddParentProject} from './add-task-parenttask';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
import { catchError, retry } from 'rxjs/operators';
import {Task} from './view-task';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

@Injectable()
export class listTaskService{
    private updateTask :Task;
    constructor(private _httpService:HttpClient){}

    
    setter(updateTask :Task){

        this.updateTask =updateTask ;
        console.log(updateTask);
    }

    
    setterUpdate(){

        this.updateTask =null ;

    }

    getter(){
        return this.updateTask ;
    }
    
    getAllTasks(): Observable<Task[]>{
        const url="http://localhost:8080/api/getTasks/";         
       return this._httpService.get<Task[]>(url,httpOptions)
       .pipe(
           catchError(this.handleError)
       );
    }


    getAllParentProjects(): Observable<AddParentProject[]>{
        const url="http://localhost:8080/api/getAllParentProjects/";         
        return this._httpService.get<AddParentProject[]>(url,httpOptions)
        .pipe(
            catchError(this.handleError)
        );
    }
            
            
    getAllProjects(): Observable<AddProject[]>{
        const url="http://localhost:8080/api/getAllProjects/";         
       return this._httpService.get<AddProject[]>(url,httpOptions)
       .pipe(
        catchError(this.handleError)
        );
    }

    getAllUsers(): Observable<AddUser[]> {
        const url = "http://localhost:8080/api/getAllUsers/";
        return this._httpService.get<AddUser[]>(url, httpOptions)
        .pipe(
            catchError(this.handleError)
        );
    }
    
    getProjectDetails(): Observable<AddProject[]> {
        const url = "http://localhost:8080/api/getProjects/";
        return this._httpService.get<AddProject[]>(url, httpOptions)
        .pipe(
            catchError(this.handleError)
        );            
    }

    sortTask(sortId: string): Observable<AddUser[]> {
        const url = "http://localhost:8080/api/getAllUsers/"+sortId;
        return this._httpService.get<AddUser[]>(url, httpOptions)
        .pipe(
            catchError(this.handleError)
        );  
    }


    sortTasks(sortId: string): Observable<Task[]> {
        const url = "http://localhost:8080/api/getTasks/"+sortId;
        return this._httpService.get<Task[]>(url, httpOptions)
        .pipe(
            catchError(this.handleError)
        );  
    }

    sortTaskProject(sortId: string): Observable<AddProject[]> {
        const url = "http://localhost:8080/api/getProjects/"+sortId;
        return this._httpService.get<AddProject[]>(url, httpOptions)
        .pipe(
            catchError(this.handleError)
        );  
    }

    private handleError(error: Response){
          return Observable.throw(error); 
    }
    
    addProject(task: AddProject){
        if(task.projectId){
            return this._httpService.put("http://localhost:8080/api/addProject/"+task.projectId,task,httpOptions);
        }else{
        return this._httpService.post("http://localhost:8080/api/addProject",task,httpOptions);
        }
    }

    addTask(task: AddTask){
        let body=JSON.stringify(task);
        if(task.taskId){
            return this._httpService.put("http://localhost:8080/api/addTask/"+task.taskId,task,httpOptions);
        }else
        {
        return this._httpService.post("http://localhost:8080/api/addTask",task,httpOptions);
        }
    }

    addUser(task: AddUser){
        let body=JSON.stringify(task);    
        if(task.userId){
            return this._httpService.put("http://localhost:8080/api/user/"+task.userId,task,httpOptions);
        }else{
        return this._httpService.post("http://localhost:8080/api/addUser",task,httpOptions);
        }
    }

    deleteUser(userId: string){
      return  this._httpService.delete("http://localhost:8080/api/user/"+userId,httpOptions);
    } 

    deleteTask(taskId: string){
      return  this._httpService.delete("http://localhost:8080/api/deleteTask/"+taskId,httpOptions);
    } 

    
    endTask(taskId: string){
      return  this._httpService.put("http://localhost:8080/api/endTask/"+taskId,httpOptions);
    } 

  
    }