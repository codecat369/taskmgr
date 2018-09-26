import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() item;
  @Input() avatar;
  @Output() openTaskEditorEvent = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
    this.avatar = this.item.owner.avatar ? this.item.owner.avatar : 'unassigned';
  }
  openTaskEditor() {
    this.openTaskEditorEvent.emit();
    console.log('openTaskEditorEvent');
  }
  checkboxClick(evt: Event) {
    evt.stopPropagation();
  }
}
