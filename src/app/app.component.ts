import { Component,OnInit,ViewChild } from '@angular/core';
import { Task } from './models/task';
import { TaskComponent } from './task/task.component';
import { TodolistComponent } from './todolist/todolist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  task!:Task[]
  @ViewChild('tasklist', {static:true})
  tasklist!:TaskComponent;
  ngOnInit(){
  }
}
