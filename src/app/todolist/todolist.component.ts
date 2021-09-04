import { Component, Input,OnInit,EventEmitter, Output} from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  tasks!:Task[];
  id!:number;
  name!:string;
  des!:String;
  decscription!:string
  isShow= false;
  isclose!:boolean;
  isSelected!:boolean;
  i!:number;
  constructor() {
      this.tasks=[];
      this.tasks.push({
        id: 1,
        name: 'Mr.A',
        decscription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum aspernatu',
      },
      {
        id: 2,
        name: 'Mr.B',
        decscription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum aspernatu',
      },
      {
        id: 3,
        name: 'Mr.c',
        decscription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum aspernatu',
      })

  }
  ngOnInit(): void {}
  selected(i:number){
    if(i== this.i){
      this.isShow = false;
    }
    if(this.isShow ==true){
      this.isShow = false
    }else{
      this.isShow = true
    }
    this.i = i;
    return(this.tasks[i]);
  }
  close(){
    this.isShow=false;
  }
  add(){
    this.tasks.push(
    {
      id:this.tasks.length +1,
      name:this.name,
      decscription: this.decscription
    })
  }
  removeThisTask(task:Task){
    console.log(task);
    let index = this.tasks.indexOf(task);
    this.tasks.splice(index,1);
  }
}
