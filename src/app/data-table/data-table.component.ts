import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
  @Input() videos = [];
  @Output() goToLink = new EventEmitter();
  @Output() toggleFavourites = new EventEmitter();
  displayedColumns = ['preview', 'title', 'favourite'];

  constructor() {
  }

}
