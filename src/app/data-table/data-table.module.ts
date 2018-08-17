import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table.component';
import {MatInputModule, MatPaginatorModule, MatTableModule, MatProgressSpinnerModule, MatSortModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    DataTableComponent
  ],
  exports: [
    DataTableComponent,
  ],
})
export class DataTableModule { }
