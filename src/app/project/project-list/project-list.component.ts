import {
  OnDestroy,
  OnInit,
  Component,
  Input,
  Inject,
  HostBinding,
  HostListener,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';
import { DialogConfirmComponent } from '../../shared/dialog-confirm/dialog-confirm.component';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';
import { slide2Rigth } from '../../animate/router.anim';
import { listAnimation } from '../../animate/list.anim';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [slide2Rigth, listAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListComponent implements OnInit {

  projects = [
    {
      'id': 1,
      'name': '企业协作管理平台',
      'desc': '项目demo1',
      'coverImg': 'assets/img/covers/0.jpg'
    },
    {
      'id': 2,
      'name': '企业协作管理平台',
      'desc': '项目demo2',
      'coverImg': 'assets/img/covers/1.jpg'
    },
  ];
  @HostBinding('@routeAnim')
  state;
  
  constructor(private dialog: MatDialog, private cdRef: ChangeDetectorRef) { }

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
      this.cdRef.markForCheck();
    });
  }

  createDialogConfig(title: string, project?: any): MatDialogConfig {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: title,
      project: project,
    };
    return dialogConfig;
  }
  openNewProjectDialog() {
    const dialogConfig = this.createDialogConfig('新建工程');
    const dialogRef = this.dialog.open(NewProjectComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data => {
      console.log(data);
      // this.projects = [...this.projects, data.project];
      this.projects = [...this.projects,
      {
        'id': 9,
        'name': '企业协作管理平台',
        'desc': '项目demo9',
        'coverImg': 'assets/img/covers/6.jpg'
      },
      {
        'id': 9,
        'name': '企业协作管理平台',
        'desc': '项目demo9',
        'coverImg': 'assets/img/covers/6.jpg'
      }];
      this.cdRef.markForCheck();
    });
  }

  openEditDialog(project: any) {
    const dialogConfig = this.createDialogConfig('编辑工程', project);
    const dialogRef = this.dialog.open(NewProjectComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data => {
      console.log(data);
      // this.projects = [...this.projects, data.project];
      this.cdRef.markForCheck();
    });
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
        // this.projects.pop();
        this.projects = this.projects.filter(p => p.id !== list.id);
        this.cdRef.markForCheck();
      }
    });
  }
}
