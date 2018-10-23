
import { NgModule, SkipSelf, Optional } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatSidenavModule } from '@angular/material';
import { loadSVGResource } from '../utils/svg.utils';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { LoginModule } from '../login/login.module';
import { ProjectModule } from '../project/project.module';
import { GviewModule } from '../gview/gview.module';
import { GviserModule } from '../gviser/gviser.module';
import { TaskModule } from '../task/task.module';
import { CoreComponent } from './core/core.component';
@NgModule({
  imports: [

    SharedModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,

    LoginModule,
    ProjectModule,
    GviewModule,
    GviserModule,
    GviserModule,
    TaskModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CoreComponent,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CoreComponent,
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule, ir: MatIconRegistry, ds: DomSanitizer) {

    if (parent) {
      throw new Error('CoreModule is singleton!');
    }
    loadSVGResource(ir, ds);
  }
}
