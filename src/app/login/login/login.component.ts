import { Component, OnInit, HostBinding, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { slide2Rigth } from '../../animate/router.anim';
import { QuoteService } from 'src/app/services/quote.service';
import { Quote } from 'src/app/domain/quote.model';

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
  animations: [slide2Rigth],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  @HostBinding('@routeAnim') state;
  matcher = new MyErrorStateMatcher();

  quote: Quote = {
    'id': '1',
    'cn': '被击垮通常只是暂时的，但如果你放弃的话，就会使它成为永恒。（Marilyn vos Savant）',
    'en': 'Being defeated is often a temporary condition. Giving up is what makes it permanent.',
    'pic': '/assets/img/quotes/1.jpg'
  };
  constructor(private fb: FormBuilder, private quoteService$: QuoteService) {
    this.quoteService$.getQuote().subscribe(q => this.quote = q);
  }

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
