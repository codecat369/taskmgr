import { OnDestroy, OnInit, Component, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-dialog-confirm',
  template: `
  <h2 mat-dialog-title>{{data.title}}</h2>
  <mat-dialog-content>
{{data.content}}
  </mat-dialog-content>
  <mat-dialog-actions>
    <button mat-raised-button color="primary" type="button" (click)="onClick(true)">确定</button>
    <button mat-button type="button" mat-dialog-close (click)="onClick(false)">取消</button>
  </mat-dialog-actions>
  `,
  styles: []
})
export class DialogConfirmComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogConfirmComponent>,

  ) {
  }

  ngOnInit() {
    console.log(JSON.stringify(this.data));
  }
  onClick(choose: boolean) {
    this.dialogRef.close(choose);
  }

}
