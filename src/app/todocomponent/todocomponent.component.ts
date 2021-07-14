import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todocomponent',
  templateUrl: './todocomponent.component.html',
  styleUrls: ['./todocomponent.component.scss']
})
export class TodocomponentComponent implements OnInit {
  todolist: any[] = [];
  error: string = "";
  constructor() { }

  ngOnInit(): void {
  }
  addTask(item: string) {

    if (item) {
      this.todolist.push({ id: this.todolist.length, name: item, isCompleted: false });
      this.error = "";
    }
    else {
      this.error = "Task can't be empty";
    }
  }

  strike(todoObj: any) {
    this.todolist.map((toDo, index) => {
      if (toDo.id == todoObj.id) {
        this.todolist[index]['isCompleted'] = !todoObj['isCompleted']
      }
    })

  }
  taskCompleted() {
    let count = 0;
    this.todolist.map((toDo) => {
      if (toDo.isCompleted) {
        count++
      }
    })
    return count;
  }


}
