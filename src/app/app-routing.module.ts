import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {HomePageComponent} from "./components/home-page/home-page.component";
import {PopularFilmResolver} from "./components/popular-films/popular-film.resolver";
import {NowPlayingResolver} from "./components/now-playing-films/now-playing.resolver";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    resolve: {popFilmsData: PopularFilmResolver, nowFilmsData: NowPlayingResolver},
    children: [
      {path: 'genres', loadChildren: () => import('./modules/genres/genres.module').then(m => m.GenresModule)}
    ]
  },
  {path: 'filmslist', loadChildren: () => import('./modules/films/films.module').then(m => m.FilmsModule)},
  {
    path: 'personalProfile',
    loadChildren: () => import('./modules/personal-page/personal-page.module').then(m => m.PersonalPageModule)
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
