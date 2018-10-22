
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { DragDirective } from './directive/drag.directive';
import { DropDirective } from './directive/drop.directive';

@NgModule({
  declarations: [
    AppComponent,
    DragDirective,
    DropDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    CoreModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
