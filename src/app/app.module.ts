import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {LayoutModule} from './layout/layout.module';
import {AppRoutingModule} from './app-routing.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {YoutubeService} from './common/youtube.service';
import {ListModule} from './list/list.module';
import {DataTableModule} from './data-table/data-table.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    ListModule,
    DataTableModule,
    BrowserAnimationsModule
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
