import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FilmListComponent} from "./components/film-list/film-list.component";
import {HttpClientModule} from "@angular/common/http";
import {FilmsService} from "./services/films.service";
import {FilmDetailsComponent} from "./components/film-details/film-details.component";

const routes: Routes = [
  {path: '', component: FilmListComponent},
  {path: ':id', component: FilmDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    HttpClientModule
  ],
  exports: [RouterModule],
  providers:[FilmsService]
})
export class FilmsRoutingModule { }
