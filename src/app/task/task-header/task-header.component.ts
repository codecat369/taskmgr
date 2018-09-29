import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent implements OnInit {
  @Input() header = '';
  @Output() newTaskEvent = new EventEmitter<void>();
  @Output() moveAllEvent = new EventEmitter<void>();
  @Output() delTaskEvent = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
  onNewTaskClick() {
    this.newTaskEvent.emit();
  }
  onMoveAllClick() {
    this.moveAllEvent.emit();
  }
  onDelTaskClick() {
    this.delTaskEvent.emit();
  }
}
