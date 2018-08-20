import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class YoutubeService {

  constructor(private http: HttpClient) {
  }

  public getVideosNoChannel(searchKey, maxResults, sortBy) {
    return this.http.get(`${environment.apiUrl}search?`,
      {
        params: {
          key: environment.apiKey,
          part: 'snippet',
          q: searchKey,
          maxResults: maxResults,
          order: sortBy
        }
      });
  }

  public addToPlaylist(video) {

    return this.http.post(`${environment.apiUrl}playlistItems?&part=snippet&alt=json&key${environment.apiKey}`,
      {
        snippet: {
          'playlistId': environment.playlist,
          'resourceId': video
        }
      }
    );
  }

}
