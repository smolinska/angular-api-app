import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input() videos = [];
  @Output() goToLink = new EventEmitter();
  displayedColumns = ['preview', 'title', 'favourite'];

  constructor() {
  }

  ngOnInit() {
  }

}
