import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskHeaderComponent implements OnInit {
  @Input() header = '';
  @Output() newTaskEvent = new EventEmitter<void>();
  @Output() moveAllEvent = new EventEmitter<void>();
  @Output() delTaskEvent = new EventEmitter<void>();
  @Output() editTaskListEvent = new EventEmitter<void>();

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
  }
  onNewTaskClick() {
    this.newTaskEvent.emit();
    this.cdRef.markForCheck();
  }
  onMoveAllClick() {
    this.moveAllEvent.emit();
    this.cdRef.markForCheck();
  }
  onDelTaskClick() {
    this.delTaskEvent.emit();
    this.cdRef.markForCheck();
  }
  onEditTaskListClick() {
    this.editTaskListEvent.emit();
    this.cdRef.markForCheck();
  }
}
