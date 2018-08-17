import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class YoutubeService {

  constructor(private http: HttpClient) {
  }

  public getVideosNoChannel(searchKey, maxResults) {
    return this.http.get(`${environment.apiUrl}search?q=${searchKey}&maxResults=${maxResults}&part=snippet&key=${environment.apiKey}`);
  }

}
