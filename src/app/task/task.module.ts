import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { TaskRoutingModule } from './task-routing.module';
import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { DialogNewTaskComponent } from './dialog-new-task/dialog-new-task.component';
import { DialogCopyTaskComponent } from './dialog-copy-task/dialog-copy-task.component';
import { NewTaskListComponent } from './new-task-list/new-task-list.component';
import { QuickTaskComponent } from './quick-task/quick-task.component';

@NgModule({
  imports: [
    SharedModule,
    TaskRoutingModule,
  ],
  declarations: [
    TaskHomeComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskHeaderComponent,
    DialogNewTaskComponent,
    DialogCopyTaskComponent,
    NewTaskListComponent,
    QuickTaskComponent,
  ],
  entryComponents: [
    DialogNewTaskComponent,
    DialogCopyTaskComponent,
    NewTaskListComponent,
  ]
})
export class TaskModule { }
