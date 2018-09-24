import { OnDestroy, OnInit, Component, Input, Inject } from '@angular/core';

import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogNewTaskComponent } from '../dialog-new-task/dialog-new-task.component';
@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

  lists = [
    {
      id: 1,
      name: '待办：',
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
            // avatar: 'avatars:svg-11',
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
      ]
    },
    {
      id: 2,
      name: '办理：',
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
  openNewTaskDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      pName: '?',
      pDesc: '??',
    };
    const dialogRef = this.dialog.open(DialogNewTaskComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Invite Dialog was closed');
      console.log(result);
    });
  }
}
