import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable()
export class StarshipsService {
  private apiUrl = "https://swapi.co/api/starships";

  constructor(private httpclient: HttpClient) { }

  getAll() {
    return this.httpclient.get(this.apiUrl).pipe(map(response => response));
  }

  getStarship(url) {
    return this.httpclient.get(url).pipe(map(response => response));
  }

}