import { OnDestroy, OnInit, Component, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-new-task',
  templateUrl: './dialog-new-task.component.html',
  styleUrls: ['./dialog-new-task.component.scss']
})
export class DialogNewTaskComponent implements OnInit {
  // data: any;
  // title: string;
  piorities = [
    { value: 3, label: '一般' },
    { value: 2, label: '重要' },
    { value: 1, label: '紧急' },
  ];
  taskInfo = {
    id: 0,
    desc: '',
  };
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogNewTaskComponent>,
  ) {
  }
  ngOnInit() {
    console.log('DialogNewTaskComponent');
    console.log(JSON.stringify(this.data));

  }
  onSave() {
    this.dialogRef.close(this.data);
  }
}

