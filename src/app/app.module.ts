import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AnimalsListModule} from './animals-list/animals-list.module';
import {LayoutModule} from './layout/layout.module';
import {AppRoutingModule} from './app-routing.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {YoutubeService} from './common/youtube.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    AnimalsListModule,
  ],
  providers: [
    HttpClient,
    YoutubeService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
