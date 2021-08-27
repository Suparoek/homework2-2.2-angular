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
}
