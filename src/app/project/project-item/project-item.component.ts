import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  @Input() item;
  @Output() inviteEvent = new EventEmitter<void>();
  @Output() editEvent = new EventEmitter<void>();
  @Output() deleteEvent = new EventEmitter<void>();
  constructor() {
  }

  ngOnInit() {
  }
  onInviteEvent() {
    this.inviteEvent.emit();
  }
  onEditEvent() {
    this.editEvent.emit();
  }
  onDeleteClick() {
    this.deleteEvent.emit();
  }
}
