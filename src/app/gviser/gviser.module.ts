import {
  NgModule
} from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { GviserRoutingModule } from './gviser-routing.module';
import { GchartComponent } from './gchart/gchart.component';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
@NgModule({
  imports: [
    SharedModule,
    GviserRoutingModule,
    ViserModule,
    BrowserModule,
  ],
  declarations: [GchartComponent]
})
export class GviserModule { }
