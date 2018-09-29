import { OnDestroy, OnInit, Component, Input, Inject } from '@angular/core';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';
import { DialogConfirmComponent } from '../../shared/dialog-confirm/dialog-confirm.component';
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
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openInviteDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {

    };
    const dialogRef = this.dialog.open(InviteComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Invite Dialog was closed');
      console.log(result);
    });
  }

  openProjectDialog(title: string, project?: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: title,
      project: project,
    };
    const dialogRef = this.dialog.open(NewProjectComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Invite Dialog was closed');
      console.log(result);
    });
  }
  openNewProjectDialog() {
    this.openProjectDialog('新建工程');
  }

  openEditDialog(project: any) {
    this.openProjectDialog('编辑工程', project);
  }

  deleteProject(list: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: '确认删除',
      content: list.desc,
    };
    const dialogRef = this.dialog.open(DialogConfirmComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        // this.projects
      }
    });
  }
}
