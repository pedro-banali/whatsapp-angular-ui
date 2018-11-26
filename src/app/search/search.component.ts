import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wa-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  isActive: boolean;
  constructor() {
    this.isActive = false;
  }

  setIsActive(value) {
    this.isActive = value;
  }
}
