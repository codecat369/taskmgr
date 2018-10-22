import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { itemAnim } from '../../animate/item.anim';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations: [itemAnim],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskItemComponent implements OnInit {
  @Input() item;
  @Input() avatar;
  @Output() openTaskEditorEvent = new EventEmitter<void>();
  itemState = 'out';
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
  @HostListener('mouseenter')
  onMouseEnter() {
    this.itemState = 'hover';
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.itemState = 'out';
  }
}
