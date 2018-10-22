import { OnDestroy, OnInit, Component, Input, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InviteComponent implements OnInit {

  items = [
    { 'id': 1, 'name': 'tony' },
    { 'id': 2, 'name': 'CodeCat' },
    { 'id': 3, 'name': 'Lily' },
  ];
  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogConfig,
    private dialogRef: MatDialogRef<InviteComponent>,
    private oc: OverlayContainer,
  ) {
    this.oc.getContainerElement().classList.add(this.dialogConfig.theme);
  }

  ngOnInit() {
  }
  displayConfig(user: { id: string, name: string }) {
    return user.id;
  }
  onSave() {
    this.dialogRef.close('ooo');
  }
}
