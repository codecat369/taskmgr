import { OnDestroy, OnInit, Component, Input, Inject } from '@angular/core';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';

import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects = [
    {
      'name': '企业协作管理平台',
      'desc': '项目demo1',
      'coverImg': 'assets/img/covers/0.jpg'
    },
    {
      'name': '企业协作管理平台',
      'desc': '项目demo2',
      'coverImg': 'assets/img/covers/1.jpg'
    },
  ];
  constructor(private dialogNew: MatDialog) { }

  ngOnInit() {
  }

  openNewProjectDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      pName: '?',
      pDesc: '??',
      theme: 'theme-dark-a',
    };
    const dialogRef = this.dialogNew.open(NewProjectComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log('NewProject Dialog was closed');
      console.log(result);
    });
  }
  openInviteDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      pName: '?',
      pDesc: '??',
      theme: 'theme-dark-a',
    };
    const dialogRef = this.dialogNew.open(InviteComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Invite Dialog was closed');
      console.log(result);
    });
  }
}
