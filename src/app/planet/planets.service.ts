import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable()
export class PlanetsService {
  private apiUrl = "https://swapi.co/api/planets";

  constructor(private httpclient: HttpClient) { }

  getAll() {
    return this.httpclient.get(this.apiUrl).pipe(map(response => response));
  }

  getPlanet(url) {
    return this.httpclient.get(url).pipe(map(response => response));
  }
}