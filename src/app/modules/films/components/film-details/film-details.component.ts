import { Component, OnInit } from '@angular/core';
import {FilmDetailsService} from "../../services/film-details.service";
import {ActivatedRoute} from "@angular/router";
import {IDetailsFilm} from "../../../../models/details.film.interface";

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
details:IDetailsFilm
  constructor(private filmDetailsService:FilmDetailsService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
      this.filmDetailsService.getFilmInformation(id).subscribe(details=>this.details=details)
    })
  }

}
