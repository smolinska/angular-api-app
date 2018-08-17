import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsComponent } from './cats/cats.component';
import { DogsComponent } from './dogs/dogs.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CatsComponent,
    DogsComponent,
  ]
})
export class AnimalsListModule { }
