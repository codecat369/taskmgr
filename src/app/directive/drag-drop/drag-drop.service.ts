import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';


export interface DragData {
  tag: string;
  source: string;
  data: any;
}
@Injectable({
  providedIn: 'root'
})
export class DragDropService {
  private dragData = new BehaviorSubject<DragData>(null);
  setDragData(val: DragData) {
    this.dragData.next(val);
  }
  getDragData(): Observable<DragData> {
    return this.dragData.asObservable();
  }
  clearDragData() {
    this.dragData.next(null);
  }
  constructor() { }
}
