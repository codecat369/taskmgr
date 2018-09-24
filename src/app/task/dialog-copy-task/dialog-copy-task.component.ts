import { OnDestroy, OnInit, Component, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-dialog-copy-task',
  templateUrl: './dialog-copy-task.component.html',
  styleUrls: ['./dialog-copy-task.component.scss']
})

export class DialogCopyTaskComponent implements OnInit {

  lists;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogCopyTaskComponent>,

  ) {
  }
  ngOnInit() {
    this.lists = this.data.lists;
    // console.log('DialogCopyTaskComponent:this.lists');
    // console.log(JSON.stringify(this.lists));
  }
  onSave() {
    this.dialogRef.close('DialogCopyTaskComponent');
  }
}
