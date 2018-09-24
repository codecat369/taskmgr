import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GchartComponent } from './gchart/gchart.component';

const routes: Routes = [
  {
    path: 'gchart', component: GchartComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GviserRoutingModule { }
