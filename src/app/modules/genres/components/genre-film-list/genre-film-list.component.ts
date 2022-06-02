import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IPopFilm} from "../../../../models/pop.film.interface";

@Component({
  selector: 'app-genre-film-list',
  templateUrl: './genre-film-list.component.html',
  styleUrls: ['./genre-film-list.component.css']
})
export class GenreFilmListComponent implements OnInit {
films:IPopFilm[]
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({genreFilmListData})=>{
      const {page, results}=genreFilmListData
      return this.films=results

    })
  }

}
