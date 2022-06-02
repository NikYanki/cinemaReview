import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenresRoutingModule } from './genres-routing.module';
import { GenresComponent } from './components/genres/genres.component';
import { GenreFilmListComponent } from './components/genre-film-list/genre-film-list.component';


@NgModule({
  declarations: [
    GenresComponent,
    GenreFilmListComponent
  ],
  imports: [
    CommonModule,
    GenresRoutingModule
  ]
})
export class GenresModule { }
