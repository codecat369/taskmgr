import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import { cardAnim } from '../../animate/card.anim';
@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations: [cardAnim]
})
export class ProjectItemComponent implements OnInit {

  @Input() item;
  @Output() inviteEvent = new EventEmitter<void>();
  @Output() editEvent = new EventEmitter<void>();
  @Output() deleteEvent = new EventEmitter<void>();

  @HostBinding('@card')
  cardState = 'out';

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
  @HostListener('mouseenter')
  onMouseEnter() {
    this.cardState = 'hover';
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.cardState = 'out';
  }
}
