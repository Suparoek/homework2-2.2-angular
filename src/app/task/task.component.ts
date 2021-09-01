import { Component, OnInit,Input,EventEmitter, Output } from '@angular/core';
import { Task } from '../models/task';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input()
  task!:Task;
  
  @Output()
  OnDelete: EventEmitter<Task> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  deleted(){
    this.OnDelete.emit(this.task);
  }
}
