import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  exports: [
    LoginRoutingModule,
    // RegisterComponent,
    // LoginComponent,

  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class LoginModule { }
