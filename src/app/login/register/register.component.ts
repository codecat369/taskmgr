import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  imgPath: Array<string>;
  initImgPath(count: number, start: number = 1, step: number = 1) {
    let i;
    this.imgPath = new Array<string>();
    for (i = start; i < count + start; i += step) {
      this.imgPath.push(`avatars:svg-${i}`);
      console.log(this.imgPath[i]);
    }
  }
  constructor() {
    this.initImgPath(16);
  }

  ngOnInit() {
  }

}
