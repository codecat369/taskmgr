import { OnDestroy, OnInit, Component, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { OverlayContainer } from '@angular/cdk/overlay';
@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogConfig,
    private dialogRef: MatDialogRef<NewProjectComponent>,
    private oc: OverlayContainer,
  ) {
    this.oc.getContainerElement().classList.add(this.dialogConfig.theme);
  }

  ngOnInit() {
    console.log(JSON.stringify(this.dialogConfig));
  }
  onSave() {
    this.dialogRef.close('hhhhhh');
  }
}
