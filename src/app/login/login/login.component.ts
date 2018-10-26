import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { slide2Rigth } from '../../animate/router.anim';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [slide2Rigth]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  @HostBinding('@routeAnim')
  state;
  matcher = new MyErrorStateMatcher();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // 简单的FormGroup初始化，但是没有FormBuilder那么简介。
    // this.form = new FormGroup(
    //   {
    //     email: new FormControl('email@abc.com', Validators.compose([
    //       Validators.required,
    //       Validators.email,
    //     ])),
    //     password: new FormControl('', [
    //       Validators.required,
    //     ]),
    //   }
    // );

    this.form = this.fb.group({
      email: ['email@abc.om',
        Validators.compose([
          Validators.required,
          Validators.email,
          this.emailValidater
        ])
      ],
      password: ['',
        Validators.required,
      ],
    });


  }
  onSubmit({ value, valid }, ev: Event) {
    ev.preventDefault();
    console.log(JSON.stringify(value));
    console.log(JSON.stringify(valid));
  }
  // 自定义验证器
  emailValidater(fc: FormControl): { [key: string]: any } {
    if (!fc.value) {
      return null;
    }
    const pattern = /^[A-Z,a-z]+@[A-Z,a-z]/;
    if (pattern.test(fc.value)) {
      return null;
    } else {
      return { emailNotValid: '这不是一个邮件地址' };
    }
  }
}
