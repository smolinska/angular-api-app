import {VideosActions, VideosActionTypes} from './actions';
import {createFeatureSelector, createSelector, select} from '@ngrx/store';
import {pipe} from 'rxjs/util/pipe';
import {filter, map} from 'rxjs/operators';
import {isNullOrUndefined} from 'util';

export interface VideosState {
  videosList: any;
}

const initialState: VideosState = {
  videosList: null,
};

export function videosReducer(state: VideosState = initialState, action: VideosActions): VideosState {
  switch (action.type) {
    case VideosActionTypes.GetVideosSuccess:
      return {...state, videosList: action.payload.response};
    default:
      return state;
  }
}

export const videosStateSelector = createFeatureSelector<VideosState>('videos');
export const searchedVideosSelector = createSelector(videosStateSelector, (state: VideosState) => state.videosList);

export const getSearchedVideos = pipe(
  select(searchedVideosSelector),
  filter(videos => !isNullOrUndefined(videos)),
  map(videos => {
    this.favourites = JSON.parse(localStorage.getItem('favouriteVideos')) || [];

    videos.map(video => {
      if (this.favourites.includes(video.id.videoId)) {
        return video.isFavourite = true;
      } else {
        return video.isFavourite = false;
      }
    });
    return videos;
  })
);
