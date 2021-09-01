import { Component, Input,OnInit,EventEmitter, Output} from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  @Input()
  tasks!:Task[];
  name!:string;
  decscription!:string;
  constructor() {
      this.tasks=[];
  }
  ngOnInit(): void {
  }
 
  addClick(name:string,decscription:string){
      this.tasks.push({
        id:this.tasks.length +1,
        name:this.name,
        decscription:this.decscription
      });
      this.name="";
      this.decscription="";
  }
  removelist(task:Task){
    this.tasks.splice(task.id -1,1);
    alert("ลบข้อมูลเรียบร้อย");
  }
}
