import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {YoutubeService} from '../common/youtube.service';
import {MatPaginator, MatSort} from '@angular/material';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @ViewChild('input') input: ElementRef;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public data = {};
  public dataSource = [];

  constructor(private service: YoutubeService) {
  }

  ngOnInit() {
    this.service.getVideosNoChannel('cute cats', 5).subscribe(
      results => {
        this.data = results;
        this.dataSource = results['items'];
        console.log(results);
      },
      err => {
        console.log(err);
      }
    );
  }

  onSubmit() {
    this.service.getVideosNoChannel(this.input.nativeElement.value, 5).subscribe(
      results => {
        this.data = results;
        this.dataSource = results['items'];
        console.log(results);
      },
      err => {
        console.log(err);
      }
    );
  }

  goToVideo(event) {
    console.log(event)
    window.location.href = `https://www.youtube.com/watch?v=${event.id.videoId}`;
  }
}
