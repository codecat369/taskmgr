import { OnDestroy, OnInit, Component, Input, Inject, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-dialog-copy-task',
  templateUrl: './dialog-copy-task.component.html',
  styleUrls: ['./dialog-copy-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DialogCopyTaskComponent implements OnInit {

  lists;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogCopyTaskComponent>,
    private cdRef: ChangeDetectorRef
  ) {
  }
  ngOnInit() {
    this.lists = this.data.lists;
    // console.log('DialogCopyTaskComponent:this.lists');
    // console.log(JSON.stringify(this.lists));
    this.cdRef.markForCheck();
  }
  onSave() {
    this.dialogRef.close('DialogCopyTaskComponent');
    this.cdRef.markForCheck();
  }
}
