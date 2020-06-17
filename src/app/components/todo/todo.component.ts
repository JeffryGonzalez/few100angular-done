import { Component, OnInit } from '@angular/core';
import { TodoListItem } from 'src/app/models';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  items: TodoListItem[] = [
    { description: 'Recycle cans', complete: false },
    { description: 'Clean Office', complete: true }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  addItem(itemEl: HTMLInputElement) {
    this.items = [{ description: itemEl.value, complete: false }, ...this.items];
    itemEl.value = '';
    itemEl.focus();
  }

  markComplete(item: TodoListItem) {
    item.complete = true;
  }

  removeCompleted() {
    this.items = this.items.filter(item => !item.complete);
  }

  get hasCompletedItems() {
    return this.items.some(item => item.complete);
  }
}
