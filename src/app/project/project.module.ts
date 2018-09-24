import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ProjectRoutingModule } from './project-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { InviteComponent } from './invite/invite.component';

@NgModule({
  imports: [
    SharedModule,
    ProjectRoutingModule,
    BrowserAnimationsModule,

  ],
  exports: [
  ],
  declarations: [
    ProjectListComponent,
    ProjectItemComponent,
    NewProjectComponent,
    InviteComponent,
  ],
  providers: [

  ],
  // 对话框放在entry组件里面。
  entryComponents: [
    NewProjectComponent,
    InviteComponent,
  ],
})
export class ProjectModule { }
