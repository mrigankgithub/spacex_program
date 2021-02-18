import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LAUNCH_YEAR, SUCCESS_ENUM } from 'src/app/models/constants';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  filterForm: FormGroup
  @Output() filterEvent = new EventEmitter(null);
  launch_year = LAUNCH_YEAR;
  success_toggle = SUCCESS_ENUM;
  selected_launch_year =-1;
  succefull_launch = -1;
  successfull_landing = -1;
  

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createFilterForm();
    this.filterForm.valueChanges.subscribe( res => {
      if (res) {
        this.filterEvent.emit(res);
      }
    })
  }

  createFilterForm() {
    this.filterForm = this.fb.group({
      launch_success: [''],
      land_success: [''],
      launch_year: [''],
    })
  }

  setLaunchYear(event,data, i) {
    this.selected_launch_year = i;
    if (event.checked) {
      this.filterForm.get('launch_year').setValue(data);
    } else {
      this.filterForm.get('launch_year').setValue('');
    }
  }

  setSuccessfullLaunch(event,data, i) {
    this.succefull_launch = i;
    if (event.checked) {
      this.filterForm.get('launch_success').setValue(data);
    } else {
      this.filterForm.get('launch_success').setValue('');
    }
  }

  setSuccessfullLanding(event,data, i) {
    this.successfull_landing = i;
    if (event.checked) {
      this.filterForm.get('land_success').setValue(data);
    } else {
      this.filterForm.get('land_success').setValue('');
    }
  }

}
