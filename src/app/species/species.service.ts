import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, mergeMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Injectable()
export class SpeciesService {
  private apiUrl = "https://swapi.co/api/species/";
  character: any;

  constructor(private httpclient: HttpClient) { }

  getAll() {
    return this.httpclient.get(this.apiUrl).pipe(map(response => response));
  }

  getSpecies(param: string) {
    const url = param + "";
    return this.httpclient.get(url).pipe(map(
      (res: Response) => { return res; }
    ));
  }
}