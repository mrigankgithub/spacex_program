import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PageConfig } from '../models/api.interface';
import { HomeServiceService } from '../home/service/home-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  spaceXData : any;
  pageConfig: PageConfig;
  filterData: any;


  constructor(private homeService: HomeServiceService, ) { }

  ngOnInit() {
    this.getSpaces();
  }


  async getSpaces() {
    const res = await this.homeService.getSpace(this.filterData);
    this.spaceXData = res;
  }

  catchFilterData(event) {
    if(event) {
      this.filterData = {...event};
      this.getSpaces()
    }
  }


}
