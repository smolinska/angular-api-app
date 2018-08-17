import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CatsComponent} from './animals-list/cats/cats.component';
import {DogsComponent} from './animals-list/dogs/dogs.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'cute-cats', pathMatch: 'full'
  },
  {
    path: 'cute-cats', component: CatsComponent
  },
  {
    path: 'funny-dogs', component: DogsComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {
}
