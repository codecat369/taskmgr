import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-quick-task',
  templateUrl: './quick-task.component.html',
  styleUrls: ['./quick-task.component.scss']
})
export class QuickTaskComponent implements OnInit {
  @Input()
  desc = '';
  @Output()
  quickTaskEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onSubmit({ value, valid }, ev: Event) {
    ev.preventDefault();
    console.log(JSON.stringify(value));
  }

  @HostListener('keyup.enter')
  sendQuickTask() {
    if (!this.desc || this.desc.length === 0) {
      return;
    }
    this.quickTaskEvent.emit(this.desc);
    this.desc = '';
  }
}
