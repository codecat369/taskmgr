import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';
import { DragDropService } from './drag-drop.service';

@Directive({
  selector: '[app-draggable][dragTag][dragData][draggedClass]'
})
export class DragDirective {
  private _isDraggable = false;

  @Input('app-draggable')
  set isDraggable(val: boolean) {
    this._isDraggable = val;
    this.rd2.setAttribute(this.elm.nativeElement, 'draggable', `${this._isDraggable}`);
  }
  get isDraggable(): boolean {
    return this._isDraggable;
  }

  @Input()
  draggedClass: string;
  @Input()
  dragTag: string;
  @Input()
  dragSource: string;
  @Input()
  dragData: any;
  constructor(private elm: ElementRef, private rd2: Renderer2, private ds: DragDropService) { }

  @HostListener('dragstart', ['$event'])
  onDragStart(ev: Event) {
    if (ev.target === this.elm.nativeElement) {
      this.rd2.addClass(this.elm.nativeElement, this.draggedClass);
      this.ds.setDragData({ tag: this.dragTag, source: this.dragSource, data: this.dragData });
    }
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(ev: Event) {
    this.rd2.removeClass(this.elm.nativeElement, this.draggedClass);
  }
}
