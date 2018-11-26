import { Component, OnInit, OnDestroy, Input, forwardRef } from '@angular/core';

import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import {
  ControlValueAccessor, NG_VALUE_ACCESSOR,
  FormControl, NG_VALIDATORS, FormBuilder, FormGroup
} from '@angular/forms';

import {
  Observable, Subject, asapScheduler, pipe, of, from, interval, merge,
  fromEvent, SubscriptionLike, PartialObserver, observable, combineLatest, Subscription
} from 'rxjs';

import { debug } from '../../utils/debug.util';
import {
  subDays, subMonths, subYears, differenceInDays,
  differenceInMonths, differenceInYears, isBefore, parse, format, isFuture, isDate, isValid,
} from 'date-fns';

export enum AgeUnit {
  Year = 0, Month, Day
}

export interface Age {
  age: number;
  unit: AgeUnit;
}


@Component({
  selector: 'app-age-input',
  templateUrl: './age-input.component.html',
  styleUrls: ['./age-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AgeInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AgeInputComponent),
      multi: true
    },
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    { provide: MAT_DATE_LOCALE, useValue: 'zh-CN' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ]
})
export class AgeInputComponent implements ControlValueAccessor, OnDestroy, OnInit {
  @Input() dateFormat = 'YYYY-MM-DD';
  subAge: Subscription;
  subDate: Subscription;
  ageUnitList = [
    { value: AgeUnit.Year, label: '岁' },
    { value: AgeUnit.Month, label: '月' },
    { value: AgeUnit.Day, label: '日' },
  ];

  form: FormGroup;
  private propagateChange = (_: any) => { };
  ngOnDestroy(): void {
    this.subAge.unsubscribe();
    this.subDate.unsubscribe();
  }

  ngOnInit() {
    this.form = this.fb.group({
      birthday: ['2000/01/01', this.validateDate],
      ageGroup: this.fb.group({
        ageNum: [0],
        ageUnit: [AgeUnit.Year]
      })
    });
    const birthday = this.form.get('birthday');
    const ageNum = this.form.get('ageGroup').get('ageNum');
    const ageUnit = this.form.get('ageGroup').get('ageUnit');

    const birthday$ = birthday.valueChanges;
    const ageNum$ = ageNum.valueChanges;
    const ageUnit$ = ageUnit.valueChanges;

    this.subDate = ageNum$.subscribe(age => {
      const date = this.getDate(age, ageUnit.value);
      if (birthday.value !== date) {
        birthday.patchValue(date, { emitEvent: false });
      }
    });

    const SetAge$ = combineLatest(birthday$, ageUnit$, (date, unit) => this.getAge(date, unit));
    this.subAge = SetAge$.subscribe(age => {
      if (ageNum.value !== age) {
        ageNum.patchValue(age, { emitEvent: false });
      }
    });
  }
  constructor(private fb: FormBuilder, private adapter: DateAdapter<any>) {

  }
  validateDate(c: FormControl): { [key: string]: any } {
    const val = parse(c.value);
    return isDate(val) && isValid(val) && !isFuture(val) ?
      null : { BirthdayInvalid: true };
  }
  validateAge(a, b) { }
  getAge(dateStr: string, unit: AgeUnit): number {
    const date = parse(dateStr);

    const now = Date.now();
    console.log(`str:${dateStr},date:${date},unit:${unit}`);

    switch (unit) {
      case AgeUnit.Year:
        return differenceInYears(now, date);
      case AgeUnit.Month:
        return differenceInMonths(now, date);
      case AgeUnit.Day:
        return differenceInDays(now, date);
      default:
        throw (new Error(`Age Input Error: date:${dateStr},unit:${unit}`));
    }
  }
  getDate(age: number, unit: AgeUnit): string {
    const now = Date.now();
    switch (unit) {
      case AgeUnit.Year:
        return format(subYears(now, age), this.dateFormat);
      case AgeUnit.Month:
        return format(subMonths(now, age), this.dateFormat);
      case AgeUnit.Day:
        return format(subDays(now, age), this.dateFormat);
      default:
        throw (new Error(`Age Input Error: age:${age},unit:${unit}`));
    }
  }
  writeValue(obj: any): void {
    if (null !== obj) {
      this.form.get('birthday').patchValue(format(obj, this.dateFormat));
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {

  }
  validate(c: FormControl): { [key: string]: any } {
    // return this.selected ? null : {
    //   ImageListInvalid: { valid: false }
    // };
    return null;
  }
}
