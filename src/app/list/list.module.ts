import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list.component';
import {DataTableModule} from '../data-table/data-table.module';
import {MatButtonModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ],
  declarations: [
    ListComponent,
  ]
})
export class ListModule {
}
