import {Action} from '@ngrx/store';

export enum VideosActionTypes {
  GetVideos = '[Videos] Get Videos',
  GetVideosSuccess = '[Videos] Get Videos Success',
  GetVideosError = '[Videos] Get Videos Error',
  AddVideoToPlaylist = '[Videos] Add Video To Playlist',
  AddVideoToPlaylistSuccess = '[Videos] Add Video To Playlist Success',
  AddVideoToPlaylistError = '[Videos] Add Video To Playlist Error',
  RemoveVideoFromPlaylist = '[Videos] Remove Video From Playlist',
  RemoveVideoFromPlaylistSuccess = '[Videos] Remove Video From Playlist Success',
  RemoveVideoFromPlaylistError = '[Videos] Remove Video From Playlist Error',
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


export class AddVideoToPlaylist implements Action {
  readonly type = VideosActionTypes.AddVideoToPlaylist;

  constructor(public payload?: { video: {videoId: string, kind: string} }) {
  }
}

export class AddVideoToPlaylistSuccess implements Action {
  readonly type = VideosActionTypes.AddVideoToPlaylistSuccess;

  constructor(public payload: { response: any }) {
  }
}

export class AddVideoToPlaylistError implements Action {
  readonly type = VideosActionTypes.AddVideoToPlaylistError;
}


export class RemoveVideoFromPlaylist implements Action {
  readonly type = VideosActionTypes.RemoveVideoFromPlaylist;

  constructor(public payload?: { videoId: string }) {
  }
}

export class RemoveVideoFromPlaylistSuccess implements Action {
  readonly type = VideosActionTypes.RemoveVideoFromPlaylistSuccess;

  constructor(public payload: { response: any }) {
  }
}

export class RemoveVideoFromPlaylistError implements Action {
  readonly type = VideosActionTypes.RemoveVideoFromPlaylistError;
}


export type VideosActions = GetVideos
  | GetVideosSuccess
  | GetVideosError
  | AddVideoToPlaylist
  | AddVideoToPlaylistSuccess
  | AddVideoToPlaylistError
  | RemoveVideoFromPlaylist
  | RemoveVideoFromPlaylistSuccess
  | RemoveVideoFromPlaylistError
  ;
