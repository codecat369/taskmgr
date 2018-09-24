import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PchartComponent } from './pchart/pchart.component';

const routes: Routes = [
  {
    path: 'pchart', component: PchartComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GviewRoutingModule { }
