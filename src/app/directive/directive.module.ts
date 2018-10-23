import { NgModule } from '@angular/core';
import { DragDirective } from './drag-drop/drag.directive';
import { DropDirective } from './drag-drop/drop.directive';
import { DragDropService } from './drag-drop/drag-drop.service';
@NgModule({
  imports: [
  ],
  exports: [
    DragDirective,
    DropDirective,
  ],
  declarations: [
    DragDirective,
    DropDirective,
  ],
  providers: [
    DragDropService,
  ],
})
export class DirectiveModule { }
