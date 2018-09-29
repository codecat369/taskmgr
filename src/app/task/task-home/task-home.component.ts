import { OnDestroy, OnInit, Component, Input, Inject } from '@angular/core';

import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogNewTaskComponent } from '../dialog-new-task/dialog-new-task.component';
import { DialogCopyTaskComponent } from '../dialog-copy-task/dialog-copy-task.component';
import { DialogConfirmComponent } from '../../shared/dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

  lists = [
    {
      id: 1,
      name: '待办',
      tasks: [
        {
          id: 1,
          desc: '去星巴克喝咖啡',
          completed: true,
          priority: 3,
          owner: {
            id: 1,
            name: 'Tony',
            avatar: 'avatars:svg-11',
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
        {
          id: 2,
          desc: '去肯德基吃午餐',
          completed: true,
          priority: 2,
          owner: {
            id: 1,
            name: 'Tony',
            avatar: 'avatars:svg-8',
          },
          dueDate: new Date(),
        },
        {
          id: 3,
          desc: '去麦当劳吃晚餐',
          completed: false,
          priority: 1,
          owner: {
            id: 1,
            name: 'Tony',
            avatar: 'avatars:svg-6',
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
      ]
    },
    {
      id: 2,
      name: '办理',
      tasks: [
        {
          id: 1,
          desc: '去星巴克喝咖啡',
          completed: false,
          priority: 1,
          owner: {
            id: 1,
            name: 'Tony',
            avatar: 'avatars:svg-7',
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: '去肯德基吃午餐',
          completed: false,
          priority: 1,
          owner: {
            id: 1,
            name: 'Tony',
            avatar: 'avatars:svg-11',
          },
          dueDate: new Date(),
        },
        {
          id: 3,
          desc: 'hhhhhhhhhhhhhhhhhhhh去麦当劳吃晚餐',
          completed: false,
          priority: 1,
          owner: {
            id: 1,
            name: 'Tony',
            avatar: 'avatars:svg-11',
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
      ]
    },
  ];
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openTasjDialog(title: string, task = {}) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: title,
      task: task,
    };
    const dialogRef = this.dialog.open(DialogNewTaskComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log(JSON.stringify(result));
    });
  }

  openNewTaskDialog() {
    this.openTasjDialog('新建任务');
  }
  openTaskEditorDialog(task: any) {
    this.openTasjDialog('修改任务', task);
  }

  openMoveAllDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = { lists: this.lists };
    // console.log(JSON.stringify(dialogConfig.data.lists));

    const dialogRef = this.dialog.open(DialogCopyTaskComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Invite Dialog was closed');
      console.log(result);
    });
  }
  deleteTask(list: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: '确认删除',
      content: list.name,
    };
    const dialogRef = this.dialog.open(DialogConfirmComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        // this.projects
      }
    });
  }
}
