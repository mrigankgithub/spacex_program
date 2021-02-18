import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-space-card',
  templateUrl: './space-card.component.html',
  styleUrls: ['./space-card.component.scss']
})
export class SpaceCardComponent implements OnInit {

  @Input() cardDetails: any;

  constructor() { }

  ngOnInit() {
  }

}
