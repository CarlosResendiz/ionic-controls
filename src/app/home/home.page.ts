import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  valueSuffix = 'value3';
  dropDownItems = [
    { name:'test1', value:'value1'},
    { name:'test2', value:'value2'},
    { name:'test3', value:'value3'},
    { name:'test4', value:'value4'},
    { name:'test5', value:'value5'}
  ];

  dropdownValue = 'value3';

  constructor() {}
  valueChanged(event) {
    this.valueSuffix = event;
  }
}
