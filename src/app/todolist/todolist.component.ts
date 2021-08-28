import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  @Input()
  title:string='';
  list = new Array();
  constructor() { }
  addClick(title:string){
    this.list.push(this.title);

    this.title ='';
  }
 /* remove(i:number){
     if(i !== -1) {
       this.list.splice(i,1);
       alert("ลบข้อมูลของท่านเรียบร้อย");
     }
  }*/
}
