import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, AfterViewInit {
  @Input() videos = [];
  @Output() goToLink = new EventEmitter();
  displayedColumns = ['preview', 'title'];
  itemsPerPagePagination = [5, 10, 20, 50, 100, 200];
  dataSource = new MatTableDataSource();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.data = this.videos;
  }

}
