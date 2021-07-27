import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {

  @Input() items: any[] = [];
  @Input() customClass: string = "";
  @Input() valueProperty: string = "value";
  @Input() descriptionProperty: string = "name";
  @Input() disabled: boolean = false;
  @Input() selectLabel: string = "Select";
  @Input() required: boolean = false;
  @Input() displayDescriptionSuffix: string = "";
  @Input() value: any;

  @Input() hasSuffix: boolean = false;
  @Input() valueSuffix: string;
  @Input() suffix: string;

  
  @Output() valueChange = new EventEmitter<any>();

  currentValue;

  interfaceOptions = {
    translucent: true,
    cssClass: 'custom-popover',
    animated: false
  };

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.value.currentValue) {
      this.setSelectedItem(changes.value.currentValue);
    }
  }

  setSelectedItem(selectedItem) {
    //////
    this.currentValue = selectedItem;
  }

  currentValueChange(newValue) {
    this.value = newValue;
    console.log(newValue);
    this.valueChange.emit(newValue);
  }
}
