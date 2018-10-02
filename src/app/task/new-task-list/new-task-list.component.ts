import { OnDestroy, OnInit, Component, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-new-task-list',
  templateUrl: './new-task-list.component.html',
  styleUrls: ['./new-task-list.component.scss']
})
export class NewTaskListComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<NewTaskListComponent>,
  ) {
  }

  ngOnInit() {
  }

  onDialogClose(result: boolean) {
    if (result) {
      this.dialogRef.close(this.data);
    } else {
      this.dialogRef.close(null);
    }
  }
}
