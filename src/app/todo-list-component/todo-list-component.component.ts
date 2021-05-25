import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list-component',
  templateUrl: './todo-list-component.component.html',
  styleUrls: ['./todo-list-component.component.css']
})
export class TodoListComponentComponent implements OnInit {
// drinks =new Array<String>();
drinks:String[]=[];
dr:String="";
onclick(){
  this.drinks.push(this.dr);
}
onclickDel(){
  this.drinks.shift();
}
  constructor() {}

  ngOnInit(): void {
  }

}
