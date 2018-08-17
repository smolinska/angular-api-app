import { Component, OnInit } from '@angular/core';
import {YoutubeService} from '../../common/youtube.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {

  constructor(private service: YoutubeService) { }

  ngOnInit() {
    this.service.getVideosNoChannel('cute cats', 5).subscribe(
      results => {
        console.log(results);
      },
      err => {
        console.log(err);
      }
    );
  }

}
