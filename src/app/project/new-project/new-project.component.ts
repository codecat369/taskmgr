import { OnDestroy, OnInit, Component, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<NewProjectComponent>,

  ) {
  }

  ngOnInit() {
    console.log(JSON.stringify(this.data));
  }
  onSave() {
    this.dialogRef.close(this.data);
  }
}
