import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { GviewRoutingModule } from './gview-routing.module';
import { PchartComponent } from './pchart/pchart.component';
import { NgxEchartsModule } from 'ngx-echarts';
@NgModule({
  imports: [
    SharedModule,
    GviewRoutingModule,
    NgxEchartsModule,
  ],
  declarations: [PchartComponent]
})
export class GviewModule { }
