import { Component, ViewChild } from '@angular/core';
import { Select } from 'ionic-angular';
import { FormGroup, FormGroupName, FormControl, FormControlName } from '@angular/forms';

@Component({
  selector: 'field-select',
  templateUrl: 'select.html',
  inputs: ['attribute', 'formGroup']
})
export class SelectComponent {

  formGroup: FormGroup;
  attribute: any = {};
  options: any = [];

  @ViewChild('select') select: Select;

  constructor() {
  }

  ngOnInit() {
    console.log(`Select ${JSON.stringify(this.attribute)}`);
    if (this.attribute.options) {
      if (Array.isArray(this.attribute.options)) {
        this.options = this.attribute.options;
      }
      else {
        this.options = this.attribute.options.split(',');
      }
    }
    else {
      this.options = [];
    }
  }

}
