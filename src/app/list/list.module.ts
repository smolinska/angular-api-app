import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list.component';
import {DataTableModule} from '../data-table/data-table.module';
import {
  MatButtonModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSelectModule,
  MatSortModule
} from '@angular/material';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {videosReducer} from '../common/store/reducers';
import {VideosEffects} from '../common/store/effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('videos', videosReducer),
    EffectsModule.forFeature([VideosEffects]),
    DataTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSelectModule,
  ],
  declarations: [
    ListComponent,
  ]
})
export class ListModule {
}
