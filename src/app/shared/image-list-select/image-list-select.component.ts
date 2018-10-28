import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, NG_VALIDATORS } from '@angular/forms';
@Component({
  selector: 'app-image-list-select',
  templateUrl: './image-list-select.component.html',
  styleUrls: ['./image-list-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImageListSelectComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ImageListSelectComponent),
      multi: true
    },
  ]
})
export class ImageListSelectComponent implements ControlValueAccessor {
  @Input() cols = 6;
  @Input() rowHeight = '64px';
  @Input() title = '选择';
  @Input() imgs: string[] = [];
  @Input() useSvgIcon = true;
  @Input() imgWidth = '80px';
  selected: string;
  private propagateChange = (_: any) => { };
  constructor() { }

  onSelect(img: string) {
    this.selected = img;
    console.log(`onSelect.selected:${this.selected}`);
    console.log(`onSelect.imgs:${JSON.stringify(this.imgs)}`);
  }
  writeValue(obj: any): void {
    this.selected = obj;
    this.propagateChange(this.selected);
    console.log(`writeValue:${this.selected}`);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {

  }
  validate(c: FormControl): { [key: string]: any } {
    return this.selected ? null : {
      ImageListInvalid: { valid: false }
    };
  }
}
