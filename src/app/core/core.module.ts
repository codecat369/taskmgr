
import { NgModule, SkipSelf, Optional } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
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

import { ServicesModule } from '../services/services.module';
@NgModule({
  imports: [

    SharedModule,
    HttpModule,
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

    ServicesModule.forRoot(),
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
  ],
  providers: [
    {
      provide: 'BASE_CONFIG', useValue: {
        apiUri: 'http://localhost:3000'
      }
    }
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
