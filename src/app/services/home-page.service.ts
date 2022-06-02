import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../configs/urls";
import {IFilmResponce} from "../models/film.responce.interface";
import {ISearchResponce} from "../models/search.responce.interface";

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private httpClient: HttpClient) {
  }

  private _apiKey: string = 'api_key=b27ed8132cb010fa85bca929ac5b00c4';

  getPopularFilms(): Observable<IFilmResponce> {
    return this.httpClient.get<IFilmResponce>(urls.mainURL + urls.popular + '?' + this._apiKey)
  }

  getNowPlayFilms(): Observable<IFilmResponce> {
    return this.httpClient.get<IFilmResponce>(urls.mainURL + urls.nowPlaying + '?' + this._apiKey + '&page=2')
  }

  getFilmsFromSarch(name: string): Observable<ISearchResponce> {
    return this.httpClient.get<ISearchResponce>(urls.mainURL + urls.search + name + '&' + this._apiKey)
  }
}
