import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  @Input() item;
  @Output() inviteEvent;

  constructor() {
    this.inviteEvent = new EventEmitter<void>();
  }

  ngOnInit() {
  }
  onInviteEvent() {
    this.inviteEvent.emit();
  }
}
