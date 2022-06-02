import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {IFilmResponce} from "../../../../models/film.responce.interface";
import {GenreFilmListService} from "../../service/genre-film-list.service";


@Injectable({
  providedIn: 'root'
})
export class GenreFilmListResolver implements Resolve<IFilmResponce> {
  constructor(private genreFilmListService: GenreFilmListService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IFilmResponce> | Promise<IFilmResponce> | IFilmResponce {
    const id =route.params['id'];
    return this.genreFilmListService.getFilmsWithGenre(id)
  }

}
