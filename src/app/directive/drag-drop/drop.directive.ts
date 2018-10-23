import { Directive, HostListener, ElementRef, Renderer2, Input, Output, EventEmitter } from '@angular/core';
import { DragDropService, DragData } from './drag-drop.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
@Directive({
  selector: '[app-dropable][dropTags][drapEnterClass]'
})
export class DropDirective {
  @Input()
  drapEnterClass: string;
  @Input()
  dropTags: string[] = [];
  private data$;
  @Output()
  dropped = new EventEmitter<DragData>();
  constructor(private elm: ElementRef, private rd2: Renderer2, private ds: DragDropService) {
    this.data$ = this.ds.getDragData().pipe(take(1));
  }

  @HostListener('dragenter', ['$event'])
  onDragEnter(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    // console.log('tg');
    // console.log(JSON.stringify(ev.target));
    // console.log('ctg');
    // console.log(JSON.stringify(ev.currentTarget));
    // console.log('clm');
    // console.log(JSON.stringify(this.elm.nativeElement));
    // if (ev.currentTarget === this.elm.nativeElement) {
    //   this.data$.pipe(dragData => {
    //     if (this.dropTags.indexOf(dragData.tag) > -1) {
    //       this.rd2.addClass(this.elm.nativeElement, this.drapEnterClass);
    //     }
    //   });
    // }
  }
  @HostListener('dragover', ['$event'])
  onDragOver(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if (ev.currentTarget === this.elm.nativeElement) {
      // console.log(`drapOver:${this.drapEnterClass}`);
      this.data$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd2.setProperty(ev, 'dataTransfer.effectAllowed', 'all');
          this.rd2.setProperty(ev, 'dataTransfer.dropEffect', 'move');
          this.rd2.addClass(this.elm.nativeElement, this.drapEnterClass);
        } else {
          this.rd2.setProperty(ev, 'dataTransfer.effectAllowed', 'none');
          this.rd2.setProperty(ev, 'dataTransfer.dropEffect', 'none');
          this.rd2.removeClass(this.elm.nativeElement, this.drapEnterClass);
        }
      });
    }
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if (ev.currentTarget === this.elm.nativeElement) {
      // console.log(`drapOver:${this.drapEnterClass}`);
      this.data$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd2.removeClass(this.elm.nativeElement, this.drapEnterClass);
        }
      });
    }
  }
  @HostListener('drop', ['$event'])
  onDrop(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if (ev.currentTarget === this.elm.nativeElement) {
      // console.log(`drapOver:${this.drapEnterClass}`);
      this.data$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd2.removeClass(this.elm.nativeElement, this.drapEnterClass);
          this.dropped.emit(dragData);
          this.ds.clearDragData();
        }
      });
    }
  }
}
