import { Component, OnInit,Input,EventEmitter, Output,ViewChild,ViewChildren,QueryList } from '@angular/core';
import { Task } from '../models/task';
import { TodolistComponent } from '../todolist/todolist.component';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input()
  task!:Task;
  isSelected!:boolean;
  i!:number;
  @Output()
  OnSelected: EventEmitter<Task> = new EventEmitter();

  ngOnInit(): void {}
  removeTask(){
    this.OnSelected.emit(this.task);
    console.log(this.task)
  }
  hilight(){
     if(this.isSelected ==true){
      this.isSelected = false;
    }else{
      this.isSelected = true
    }   
    // console.log(this.task.id);
  }
}
