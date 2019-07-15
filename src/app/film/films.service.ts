import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable()
export class FilmsService {
  private apiUrl = "https://swapi.co/api/films/";

  constructor(private httpclient: HttpClient) { }

  getAll() {
    return this.httpclient.get(this.apiUrl).pipe(map(response => response));
  }

  getFilm(url) {
    return this.httpclient.get(url).pipe(map(response => response));
  }
}