import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AppState} from '../reducers';
import {Store} from '@ngrx/store';
import {of} from 'rxjs/observable/of';
import {YoutubeService} from '../youtube.service';
import {GetVideos, GetVideosError, GetVideosSuccess, VideosActionTypes} from './actions';

@Injectable()
export class VideosEffects {

  @Effect() getVideos$ = this.actions$.pipe(
    ofType(VideosActionTypes.GetVideos),
    switchMap((action: GetVideos) => this.service.getVideosNoChannel(action.payload.serachKey, action.payload.maxResults,
      action.payload.sortBy).pipe(
      map(result => new GetVideosSuccess(({response: result['items']}))),
      catchError(error => of(new GetVideosError())),
    ))
  );

  constructor(private actions$: Actions,
              private service: YoutubeService,
              private router: Router,
              private store$: Store<AppState>) {
  }
}
