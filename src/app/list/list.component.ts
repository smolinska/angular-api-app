import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {Store} from '@ngrx/store';
import {AppState} from '../common/reducers';
import {GetVideos} from '../common/store/actions';
import {Subscription} from 'rxjs/Subscription';
import {getSearchedVideos} from '../common/store/reducers';
import {Filters} from '../common/shared';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  @ViewChild('input') input: ElementRef;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public data = {};
  public dataSource = [];
  public itemsPerPage = [5, 10, 20, 50];
  public selectedNumberOfItems = 5;
  public sortByList = Object.values(Filters);
  public selectedSortBy = Filters.Date;
  private subscriptions = new Subscription();

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.subscriptions.add(this.store.pipe(
      getSearchedVideos
      ).subscribe(
      videos => {
        if (this.selectedSortBy === Filters.Favourite) {
          videos = videos.sort((a, b) => b.isFavourite - a.isFavourite);
        }
        this.dataSource = videos;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  onSubmit() {
    let sortBy;
    if (this.selectedSortBy === Filters.Favourite) {
      sortBy = Filters.Date;
    } else {
      sortBy = this.selectedSortBy;
    }

    this.store.dispatch(new GetVideos({
      serachKey: this.input.nativeElement.value, maxResults: this.selectedNumberOfItems,
      sortBy: sortBy
    }));
  }

  goToVideo(event) {
    window.location.href = `https://www.youtube.com/watch?v=${event.id.videoId}`;
  }

  toggleFavourites(event) {
    let favouriteVideos = JSON.parse(localStorage.getItem('favouriteVideos')) || [];
    const videoId = event.id.videoId;

    if (!event.isFavourite) {
      favouriteVideos = favouriteVideos.filter(item => item !== videoId);
    } else {
      favouriteVideos.push(videoId);
    }
    localStorage.setItem('favouriteVideos', JSON.stringify(favouriteVideos));
  }
}
