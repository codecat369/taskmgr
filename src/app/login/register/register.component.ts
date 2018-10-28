import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  imgPath: Array<string>;
  defaultImage: string;
  initImgPath(count: number, start: number = 1, step: number = 1) {
    let i;
    this.imgPath = new Array<string>();
    for (i = start; i < count * step + start; i += step) {
      this.imgPath.push(`avatars:svg-${i}`);
      console.log(this.imgPath[i - 1]);
    }
    this.defaultImage = this.imgPath[start + Math.floor(count * step * Math.random())];
  }
  constructor(private fb: FormBuilder) {
    this.initImgPath(16);
    this.form = this.fb.group({
      email: [],
      psd: [],
      psdrpt: [],
      avatar: [this.defaultImage],
    });
  }

  ngOnInit() {
  }
  onSubmit({ }, ev: Event) {

  }
}
