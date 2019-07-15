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

  /*
  getSpecies(url) {
    return this.httpclient.get(url).pipe(map(response => response));
  }
  */

  getSpecies(param: string) {
    const url = param + "";
    return this.httpclient.get(url).pipe(map(
      (res: Response) => { return res; }
    ));
  }

  /*
  getSpecie() {
    return this.httpclient.get(this.apiUrl)
      .pipe(
        mergeMap((species: any) => {
          return forkJoin(
            // Get the homeworld
            this.httpclient.get(species.homeworld),
            // Another forkJoin for the species
            forkJoin(
              species.films.map(type => {
                return this.httpclient.get(type)
              })
            )
          ).pipe(
            // Transform to a consumable object
            map(d => {
              return {
                species: species,
                homeworld: d[0],
                films: d[1]
              }
            })
          )
        })
      )

  }
  */

}