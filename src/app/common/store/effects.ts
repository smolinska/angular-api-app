import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {YoutubeService} from '../youtube.service';
import {
  AddVideoToPlaylist, AddVideoToPlaylistError, AddVideoToPlaylistSuccess, GetVideos, GetVideosError, GetVideosSuccess,
  VideosActionTypes
} from './actions';

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

  @Effect() addVideoToPlaylist$ = this.actions$.pipe(
    ofType(VideosActionTypes.AddVideoToPlaylist),
    switchMap((action: AddVideoToPlaylist) => this.service.addToPlaylist(action.payload.video).pipe(
      map(result => new AddVideoToPlaylistSuccess(({response: result['items']}))),
      catchError(error => of(new AddVideoToPlaylistError())),
    ))
  );

  constructor(private actions$: Actions,
              private service: YoutubeService) {
  }
}
