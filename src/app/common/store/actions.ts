import {Action} from '@ngrx/store';

export enum VideosActionTypes {
  GetVideos = '[Videos] Get Videos',
  GetVideosSuccess = '[Videos] Get Videos Success',
  GetVideosError = '[Videos] Get Videos Error',
}


export class GetVideos implements Action {
  readonly type = VideosActionTypes.GetVideos;

  constructor(public payload?: { serachKey: string, maxResults: number, sortBy: string }) {
  }
}

export class GetVideosSuccess implements Action {
  readonly type = VideosActionTypes.GetVideosSuccess;

  constructor(public payload: { response: Object }) {
  }
}

export class GetVideosError implements Action {
  readonly type = VideosActionTypes.GetVideosError;
}


export type VideosActions = GetVideos
  | GetVideosSuccess
  | GetVideosError
  ;
